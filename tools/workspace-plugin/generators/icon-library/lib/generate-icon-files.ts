import {
  extractSvgBody,
  extractSvgRootAttributes,
  hoistPresentationAttributes,
  prefixSvgTags,
} from './svg-component';
import {
  iconCollidingNames,
  iconComponentName,
  iconComponentSelector,
  kebabToPascalCase,
} from './naming';

export interface IconSetInfo {
  name?: string;
  author?: { name?: string };
  license?: { title?: string; url?: string };
}

/** Fixed input emission order for hoisted presentation attributes. */
const HOISTED_INPUTS: { attr: string; name: string; type: string }[] = [
  { attr: 'fill', name: 'fill', type: 'string' },
  { attr: 'stroke', name: 'stroke', type: 'string' },
  { attr: 'stroke-width', name: 'strokeWidth', type: 'string | number' },
  { attr: 'stroke-linecap', name: 'strokeLinecap', type: 'string' },
  { attr: 'stroke-linejoin', name: 'strokeLinejoin', type: 'string' },
];

const TEMPLATE_INDENT = '    ';
const ATTR_INDENT = '      ';
const MAX_SINGLE_LINE_LENGTH = 100;

/**
 * Maps an icon name to the module (file) stem of its generated component.
 * The icon named `index` must not shadow the icons barrel (`index.ts`), so it
 * lives in `index-icon.ts` instead; the barrel and the docs derive the import
 * path from this same mapping.
 */
export function iconComponentFileStem(iconName: string): string {
  return iconName === 'index' ? 'index-icon' : iconName;
}

/**
 * Builds the attribution comment shared by every generated icon component.
 */
export function iconSetAttribution(setInfo: IconSetInfo): string {
  return (
    `Icon from ${setInfo.name ?? 'Unknown'}` +
    (setInfo.author?.name ? ` by ${setInfo.author.name}` : '') +
    (setInfo.license?.title ? ` - ${setInfo.license.title}` : '') +
    (setInfo.license?.url ? ` (${setInfo.license.url})` : '')
  );
}

/**
 * Splits a tag's attribute list into whole `name="value"` tokens, robust to
 * spaces inside quoted values (e.g. `points="0,0 1,1 2,2"`).
 */
function splitAttrs(attrs: string): string[] {
  const tokens: string[] = [];
  const re = /([\w:.-]+)="([^"]*)"/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(attrs)) !== null) {
    tokens.push(`${match[1]}="${match[2]}"`);
  }
  return tokens;
}

/**
 * Renders a prefixed SVG body into template lines indented 4 spaces under the
 * template literal line. Short elements stay on one line; longer ones break
 * each attribute onto its own line (2 extra spaces).
 */
function renderTemplateBody(body: string): string {
  const lines: string[] = [];
  const tokenRe = /<[^>]*>|[^<]+/g;
  let match: RegExpExecArray | null;
  while ((match = tokenRe.exec(body)) !== null) {
    const token = match[0];
    if (token[0] !== '<') {
      const text = token.trim();
      if (text) {
        lines.push(`${TEMPLATE_INDENT}${text}`);
      }
      continue;
    }
    if (token.startsWith('</')) {
      lines.push(`${TEMPLATE_INDENT}${token}`);
      continue;
    }
    if (token.length <= MAX_SINGLE_LINE_LENGTH) {
      lines.push(`${TEMPLATE_INDENT}${token}`);
      continue;
    }
    const selfClosing = token.endsWith('/>');
    const content = token.slice(1, selfClosing ? -2 : -1);
    const spaceIdx = content.indexOf(' ');
    if (spaceIdx < 0) {
      lines.push(`${TEMPLATE_INDENT}${token}`);
      continue;
    }
    lines.push(`${TEMPLATE_INDENT}<${content.slice(0, spaceIdx)}`);
    for (const attr of splitAttrs(content.slice(spaceIdx + 1).trim())) {
      lines.push(`${ATTR_INDENT}${attr}`);
    }
    lines.push(`${TEMPLATE_INDENT}${selfClosing ? '/>' : '>'}`);
  }
  return lines.join('\n');
}

/**
 * Emits the content of ONE self-contained Angular icon component with the SVG
 * body inline in its template. Presentation attributes uniform across the
 * body are hoisted to host inputs so consumers can control them;
 * width/height/viewBox come from the rendered SVG root.
 *
 * @param setInfo Icon set metadata for the attribution comment.
 * @param iconName icon name, e.g. `archive`.
 * @param svg full SVG string (root + body) for the icon.
 * @param svgBase64 base64 of `svg` for the JSDoc preview.
 * @param setName module name that scopes the component's class and selector
 *   (the secondary entry name for split sets, e.g. `fluent-20-filled`, or the
 *   collection id for single-entry sets, e.g. `ei`).
 * @param collidingNames names of this scope whose plain PascalCase form
 *   collides with another icon (see `iconCollidingNames`), used to
 *   disambiguate class names (e.g. `mp-3-01` vs `mp-301`).
 */
export function generateIconFileContent(
  setInfo: IconSetInfo,
  iconName: string,
  svg: string,
  svgBase64: string,
  setName: string,
  collidingNames?: Set<string>,
): string {
  const pascal = kebabToPascalCase(setName);
  const className = iconComponentName(setName, iconName, collidingNames);
  const selector = iconComponentSelector(setName, iconName, collidingNames);
  const root = extractSvgRootAttributes(svg);
  const { body, hoisted } = hoistPresentationAttributes(extractSvgBody(svg));
  const templateBody = renderTemplateBody(prefixSvgTags(body));

  const inputs = [
    "readonly ariaHidden = input<boolean | 'true' | 'false'>(true);",
  ];
  if (root.width !== null) {
    inputs.push(`readonly width = input<string | number>('${root.width}');`);
  }
  if (root.height !== null) {
    inputs.push(`readonly height = input<string | number>('${root.height}');`);
  }
  if (root.viewBox !== null) {
    inputs.push(`readonly viewBox = input<string>('${root.viewBox}');`);
  }
  for (const { attr, name, type } of HOISTED_INPUTS) {
    const value = hoisted[attr];
    if (value === undefined) {
      continue;
    }
    const alias = attr === name ? '' : `, { alias: '${attr}' }`;
    inputs.push(`readonly ${name} = input<${type}>('${value}'${alias});`);
  }

  const host = [
    "'[attr.aria-hidden]': 'ariaHidden()',",
    "'[attr.xmlns]': 'xmlns',",
  ];
  if (root.width !== null) {
    host.push("'[attr.width]': 'width()',");
  }
  if (root.height !== null) {
    host.push("'[attr.height]': 'height()',");
  }
  if (root.viewBox !== null) {
    host.push("'[attr.viewBox]': 'viewBox()',");
  }
  for (const { attr, name } of HOISTED_INPUTS) {
    if (hoisted[attr] === undefined) {
      continue;
    }
    host.push(`'[attr.${attr}]': '${name}()',`);
  }
  host.push("'data-slot': 'icon',");

  return `/**
 * @component @name ${className}
 * @description ${pascal} SVG icon component. ${iconSetAttribution(setInfo)}
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://icon-sets.iconify.design/${setName}/${iconName}
 *
 * @usage
 * \`\`\`html
 * <svg ${selector.slice(4, -1)}></svg>
 * \`\`\`
 */
import {
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: '${selector}',
  template: \`
${templateBody}
  \`,
  host: {
    ${host.join('\n    ')}
  },
  encapsulation: ViewEncapsulation.None,
})
export class ${className} {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  ${inputs[0]}

  ${inputs.slice(1).join('\n  ')}
}
`;
}

/**
 * Emits the `icons/index.ts` barrel for the given icon components.
 *
 * `collidingNames` is the full set of colliding icon names in this scope (see
 * `iconCollidingNames`); it is used to disambiguate colliding class names
 * exactly like the per-icon component content does. The icon named `index` is
 * imported from its `index-icon` module so it does not shadow the barrel
 * itself.
 */
export function generateIconsBarrel(
  icons: string[],
  setName: string,
  collidingNames?: Set<string>,
): string {
  return icons.length
    ? icons
        .map(
          (name) =>
            `export { ${iconComponentName(setName, name, collidingNames)} } from './${iconComponentFileStem(name)}';`,
        )
        .join('\n') + '\n'
    : '';
}
