import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiMagnifierIcon],svg[gravity-ui-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMagnifierIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMagnifierMinusIcon],svg[gravity-ui-magnifier-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 11a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5m0 1.5a5.73 5.73 0 0 0 3.501-1.188l2.719 2.718a.75.75 0 1 0 1.06-1.06l-2.718-2.719A5.75 5.75 0 1 0 6.75 12.5m-2-6.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMagnifierMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMagnifierPlusIcon],svg[gravity-ui-magnifier-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 11a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5m0 1.5a5.73 5.73 0 0 0 3.501-1.188l2.719 2.718a.75.75 0 1 0 1.06-1.06l-2.718-2.719A5.75 5.75 0 1 0 6.75 12.5m.75-7.75a.75.75 0 0 0-1.5 0V6H4.75a.75.75 0 0 0 0 1.5H6v1.25a.75.75 0 0 0 1.5 0V7.5h1.25a.75.75 0 0 0 0-1.5H7.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMagnifierPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMapPinIcon],svg[gravity-ui-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMapPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMapPinMinusIcon],svg[gravity-ui-map-pin-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-8.75-.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMapPinMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMapPinPlusIcon],svg[gravity-ui-map-pin-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0M8.75 4.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMapPinPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMathIntersectionShapeIcon],svg[gravity-ui-math-intersection-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 13.25V7.5a5 5 0 0 0-10 0v5.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V7.5a3 3 0 0 1 6 0v5.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25m1.5-5.75v5.75A1.75 1.75 0 0 1 12.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75V7.5a1.5 1.5 0 1 0-3 0v5.75A1.75 1.75 0 0 1 4.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75V7.5a6.5 6.5 0 0 1 13 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMathIntersectionShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMathOperationsIcon],svg[gravity-ui-math-operations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.874 3.44a.75.75 0 1 0-1.061-1.06L11.75 3.44l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.062 1.06l-1.062 1.063a.75.75 0 0 0 1.06 1.06l1.062-1.061l1.062 1.062a.75.75 0 0 0 1.06-1.061L12.813 4.5zm-11.625.31a.75.75 0 0 0 0 1.5H6.75a.75.75 0 1 0 0-1.5zm3.001 5.5a.75.75 0 0 0-1.5 0v1.501h-1.5a.75.75 0 0 0 0 1.5h1.5v1.502a.75.75 0 0 0 1.5 0V12.25h1.501a.75.75 0 0 0 0-1.5h-1.5zm4.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMathOperationsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMathUnionShapeIcon],svg[gravity-ui-math-union-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.75V8.5a5 5 0 0 0 10 0V2.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25V8.5a3 3 0 1 1-6 0V2.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25M1.5 8.5V2.75C1.5 1.784 2.284 1 3.25 1h1.5c.966 0 1.75.784 1.75 1.75V8.5a1.5 1.5 0 1 0 3 0V2.75c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75V8.5a6.5 6.5 0 0 1-13 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMathUnionShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMedalIcon],svg[gravity-ui-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.836 1.5a.664.664 0 0 1 .491 1.11l-.354.39H4.027l-.354-.39a.664.664 0 0 1 .49-1.11zm-6.445 3l2.124 2.336a.5.5 0 0 0 .37.164h.23a.5.5 0 0 0 .37-.164L10.61 4.5zm.652 2.947L3.5 4.65v1.852a.5.5 0 0 0 .123.328L4.87 8.266a4.5 4.5 0 0 1 1.172-.82m-2.08 2.061l-1.47-1.693A2 2 0 0 1 2 6.502V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.502a2 2 0 0 1-.49 1.312l-1.474 1.694a4.5 4.5 0 1 1-8.073 0m7.166-1.242a4.5 4.5 0 0 0-1.172-.82L12.5 4.65v1.852a.5.5 0 0 1-.123.328zM11 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMedalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMegaphoneIcon],svg[gravity-ui-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.113 11.615c.374.814.713.885.887.885s.513-.071.887-.885c.377-.816.613-2.077.613-3.615s-.236-2.799-.613-3.615C12.513 3.57 12.175 3.5 12 3.5s-.513.071-.887.885C10.736 5.2 10.5 6.462 10.5 8s.236 2.799.613 3.615M9 8c0 1.469.197 2.815.59 3.858L2.902 9.31a1.402 1.402 0 0 1 0-2.62l6.686-2.548C9.196 5.185 9 6.532 9 8m3 6c2 0 3-2.686 3-6s-1-6-3-6c-.661 0-1.317.12-1.934.356L2.369 5.288a2.902 2.902 0 0 0 0 5.424l.827.315a2.5 2.5 0 1 0 4.67 1.78l2.2.837A5.4 5.4 0 0 0 12 14m-5.537-1.729L4.6 11.563a1 1 0 1 0 1.862.71" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMegaphoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMicrophoneIcon],svg[gravity-ui-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 7V3.5a1.5 1.5 0 1 0-3 0V7a1.5 1.5 0 1 0 3 0M8 .5a3 3 0 0 0-3 3V7a3 3 0 0 0 6 0V3.5a3 3 0 0 0-3-3m.75 12.454A6 6 0 0 0 14 7v-.25a.75.75 0 0 0-1.5 0V7a4.5 4.5 0 1 1-9 0v-.25a.75.75 0 0 0-1.5 0V7c0 3.06 2.29 5.585 5.25 5.954v1.796a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMicrophoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMicrophoneSlashIcon],svg[gravity-ui-microphone-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.773 9.9A3.004 3.004 0 0 1 5 7v-.94L1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 1 1-1.06 1.06l-1.884-1.883a6 6 0 0 1-2.336.807v1.796a.75.75 0 0 1-1.5 0v-1.796A6 6 0 0 1 2 7v-.25a.75.75 0 0 1 1.5 0V7a4.5 4.5 0 0 0 6.481 4.042L8.825 9.885zM9.5 3.5v2.798l1.415 1.415Q11 7.369 11 7V3.5a3 3 0 0 0-5.669-1.371l1.18 1.18A1.5 1.5 0 0 1 9.5 3.5m2.587 5.385L13.2 9.997c.51-.882.8-1.905.8-2.997v-.25a.75.75 0 0 0-1.5 0V7a4.5 4.5 0 0 1-.413 1.885" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMicrophoneSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMinusIcon],svg[gravity-ui-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 8a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11A.75.75 0 0 1 1.75 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMinusShapeIcon],svg[gravity-ui-minus-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 9.5h10.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25m10.5 1.5H2.75A1.75 1.75 0 0 1 1 9.25v-2.5C1 5.784 1.784 5 2.75 5h10.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 11" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMinusShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMinusShapeFillIcon],svg[gravity-ui-minus-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 11h11A1.5 1.5 0 0 0 15 9.5v-3A1.5 1.5 0 0 0 13.5 5h-11A1.5 1.5 0 0 0 1 6.5v3A1.5 1.5 0 0 0 2.5 11"></svg:path>`,
})
export class GravityUiMinusShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMoleculeIcon],svg[gravity-ui-molecule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiMolecule0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M4.706 3.39a1 1 0 1 1 .108-.064a1 1 0 0 0-.108.064m.108 1.546Q4.542 5 4.25 5a2.5 2.5 0 1 1 1.856-.825l.849 1.484a3.5 3.5 0 0 1 3.191.576l2.222-1.851a1.75 1.75 0 1 1 1.101 1.035l-2.362 1.968c.251.483.393 1.031.393 1.613c0 .557-.13 1.083-.361 1.55l.958.767a2.25 2.25 0 1 1-.959 1.154l-.937-.75a3.5 3.5 0 0 1-5.62-1.971H3.33a1.75 1.75 0 1 1 0-1.5h1.25a3.5 3.5 0 0 1 1.072-1.846zM10 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3.25 5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiMolecule0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiMoleculeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMoonIcon],svg[gravity-ui-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 0 0 2.263-10.514a5.5 5.5 0 0 1-7.278 7.278A5.5 5.5 0 0 0 8 13.5M1.045 8.795a7.001 7.001 0 1 0 7.75-7.75l-.028-.003A7 7 0 0 0 8 1c-.527 0-.59.842-.185 1.18a4 4 0 0 1 .342.322A4 4 0 1 1 2.18 7.814C1.842 7.41 1 7.474 1 8a7 7 0 0 0 .045.794" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMoonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMugIcon],svg[gravity-ui-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.123 5.357c.712-.37.877-.75.877-1.107s-.165-.736-.877-1.107C9.373 2.752 8.2 2.5 6.75 2.5s-2.622.252-3.373.643c-.712.37-.877.75-.877 1.107s.165.736.877 1.107C4.127 5.748 5.3 6 6.75 6s2.622-.252 3.373-.643M6.75 7.5c1.684 0 3.198-.305 4.25-.914v5.164c0 .357-.165.736-.877 1.107c-.75.391-1.924.643-3.373.643s-2.622-.252-3.373-.643c-.712-.37-.877-.75-.877-1.107V6.586c1.052.61 2.566.914 4.25.914m5.75-3.25C12.5 2.083 9.926 1 6.75 1S1 2.083 1 4.25v7.5C1 13.917 3.574 15 6.75 15s5.75-1.083 5.75-3.25v-1.182l.2-.08c.616-.256 1.27-.613 1.791-1.112c.534-.512 1.01-1.256 1.01-2.218c0-.437-.097-.89-.345-1.304a2.4 2.4 0 0 0-.956-.89c-.562-.292-1.185-.358-1.7-.352zm0 1.862v2.82c.86-.425 1.501-1.016 1.501-1.774c0-.806-.652-1.058-1.501-1.046" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiMusicNoteIcon],svg[gravity-ui-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 5.46v3.08a3 3 0 0 0-.976 0q-.135.022-.274.055C10.231 8.96 9 10.263 9 11.505s1.231 1.955 2.75 1.59c1.519-.364 2.75-1.667 2.75-2.91q0-.057-.004-.113L14.5 10V1.25a.75.75 0 0 0-.932-.728L6.136 2.38l-.568.142A.75.75 0 0 0 5 3.25v7.291a3 3 0 0 0-.976 0q-.135.021-.274.054C2.231 10.96 1 12.263 1 13.506s1.231 1.955 2.75 1.59c1.519-.364 2.75-1.667 2.75-2.91q0-.057-.003-.113L6.5 12V7.086zm0-1.546V2.211L6.5 3.836v1.703l6.136-1.534zm-8.003 8.127a2 2 0 0 0 .003.144c0 .133-.079.419-.396.754a2.5 2.5 0 0 1-1.204.698c-.47.113-.748.023-.844-.032a.2.2 0 0 1-.047-.036l-.001-.002l-.003-.007a.2.2 0 0 1-.005-.054c0-.133.079-.419.396-.754a2.5 2.5 0 0 1 1.204-.698a1.6 1.6 0 0 1 .637-.037q.13.024.26.024m8-2a2 2 0 0 0 .003.144c0 .133-.079.419-.396.754a2.5 2.5 0 0 1-1.204.698c-.47.113-.748.023-.844-.032a.2.2 0 0 1-.047-.036l-.001-.002l-.003-.007a.2.2 0 0 1-.005-.054c0-.133.079-.419.396-.754a2.5 2.5 0 0 1 1.204-.698a1.6 1.6 0 0 1 .637-.037q.13.024.26.024" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiMusicNoteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesDownIcon],svg[gravity-ui-nodes-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 11a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 14a3 3 0 1 0-.79-5.895L10.092 6.15a3 3 0 1 0-4.185 0L4.79 8.105A3.003 3.003 0 0 0 1 11a3 3 0 1 0 5.092-2.15L7.21 6.895a3 3 0 0 0 1.58 0L9.908 8.85A3 3 0 0 0 12 14m-6.5-3a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M8 2.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesLeftIcon],svg[gravity-ui-nodes-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2 4a3 3 0 1 1 5.895.79L9.85 5.908a3 3 0 1 1 0 4.185L7.895 11.21A3.003 3.003 0 0 1 5 15a3 3 0 1 1 2.15-5.092L9.105 8.79a3 3 0 0 1 0-1.58L7.15 6.092A3 3 0 0 1 2 4m3 6.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M13.5 8a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesRightIcon],svg[gravity-ui-nodes-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M14 4a3 3 0 1 0-5.895.79L6.15 5.908a3 3 0 1 0 0 4.185l1.955 1.117A3.003 3.003 0 0 0 11 15a3 3 0 1 0-2.15-5.092L6.895 8.79a3 3 0 0 0 0-1.58L8.85 6.092A3 3 0 0 0 14 4m-3 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2.5 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesUpIcon],svg[gravity-ui-nodes-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M4 2a3 3 0 1 0 .79 5.895L5.908 9.85a3 3 0 1 0 4.185 0l1.117-1.955A3.003 3.003 0 0 0 15 5a3 3 0 1 0-5.092 2.15L8.79 9.105a3 3 0 0 0-1.58 0L6.092 7.15A3 3 0 0 0 4 2m6.5 3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiNutHexIcon],svg[gravity-ui-nut-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.874 8.25l-2.72 4.712a.5.5 0 0 1-.434.25H5.28a.5.5 0 0 1-.433-.25L2.127 8.25a.5.5 0 0 1 0-.5l2.72-4.712a.5.5 0 0 1 .433-.25h5.44a.5.5 0 0 1 .433.25l2.72 4.712a.5.5 0 0 1 0 .5m1.3-1.25a2 2 0 0 1 0 2l-2.72 4.712a2 2 0 0 1-1.733 1H5.28a2 2 0 0 1-1.732-1L.828 9a2 2 0 0 1 0-2l2.72-4.712a2 2 0 0 1 1.732-1h5.44a2 2 0 0 1 1.732 1zM9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNutHexIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignBottomIcon],svg[gravity-ui-object-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 12.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM7 9.5h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1m-2.5-1A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5V4A2.5 2.5 0 0 0 9 1.5H7A2.5 2.5 0 0 0 4.5 4z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignCenterHorizontalIcon],svg[gravity-ui-object-align-center-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1m-1-2.5A2.5 2.5 0 0 1 14.5 7v2a2.5 2.5 0 0 1-2.5 2.5H8.75v2.75a.75.75 0 0 1-1.5 0V11.5H4A2.5 2.5 0 0 1 1.5 9V7A2.5 2.5 0 0 1 4 4.5h3.25V1.75a.75.75 0 1 1 1.5 0V4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignCenterHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignCenterVerticalIcon],svg[gravity-ui-object-align-center-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1M4.5 4A2.5 2.5 0 0 1 7 1.5h2A2.5 2.5 0 0 1 11.5 4v3.25h2.75a.75.75 0 0 1 0 1.5H11.5V12A2.5 2.5 0 0 1 9 14.5H7A2.5 2.5 0 0 1 4.5 12V8.75H1.75a.75.75 0 0 1 0-1.5H4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignCenterVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignJustifyHorizontalIcon],svg[gravity-ui-object-align-justify-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 15a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-.75.75M11 9V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1m1.5-2A2.5 2.5 0 0 0 10 4.5H6A2.5 2.5 0 0 0 3.5 7v2A2.5 2.5 0 0 0 6 11.5h4A2.5 2.5 0 0 0 12.5 9zM1 14.25a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignJustifyHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignJustifyVerticalIcon],svg[gravity-ui-object-align-justify-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 14.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75M7 11h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1m2 1.5a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 9 3.5H7A2.5 2.5 0 0 0 4.5 6v4A2.5 2.5 0 0 0 7 12.5zM1.75 1a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignJustifyVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignLeftIcon],svg[gravity-ui-object-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 14.25a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0zM6.5 7v2a1 1 0 0 0 1 1H12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7.5a1 1 0 0 0-1 1m1-2.5A2.5 2.5 0 0 0 5 7v2a2.5 2.5 0 0 0 2.5 2.5H12A2.5 2.5 0 0 0 14.5 9V7A2.5 2.5 0 0 0 12 4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignRightIcon],svg[gravity-ui-object-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 14.25a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0zM9.5 7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1m-1-2.5A2.5 2.5 0 0 1 11 7v2a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 9V7A2.5 2.5 0 0 1 4 4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignTopIcon],svg[gravity-ui-object-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 2a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM7 6.5h2a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1m-2.5 1A2.5 2.5 0 0 1 7 5h2a2.5 2.5 0 0 1 2.5 2.5V12A2.5 2.5 0 0 1 9 14.5H7A2.5 2.5 0 0 1 4.5 12z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignBottomIcon],svg[gravity-ui-objects-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 14a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5zM5.5 9.5H4a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 4 3h1.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5M4 11a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2V9a2 2 0 0 1-2 2zm8-1.5h-1.5A.5.5 0 0 1 10 9V7a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5M10.5 11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignCenterHorizontalIcon],svg[gravity-ui-objects-align-center-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 5.5V4a.5.5 0 0 0-.5-.5h-9A.5.5 0 0 0 3 4v1.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5m-4.25 2h3.75a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8.75v-.25a.75.75 0 0 0-1.5 0V2H3.5a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2h3.75v1H6a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2h1.25v.25a.75.75 0 0 0 1.5 0V14H10a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-2-2H8.75zM8 10H6a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignCenterHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignCenterVerticalIcon],svg[gravity-ui-objects-align-center-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3H4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5m2 4.25V3.5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3.75h-.25a.75.75 0 0 0 0 1.5H2v3.75a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2V8.75h1V10a2 2 0 0 0 2 2H12a2 2 0 0 0 2-2V8.75h.25a.75.75 0 0 0 0-1.5H14V6a2 2 0 0 0-2-2h-1.5a2 2 0 0 0-2 2v1.25zM10 8v2a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignCenterVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignJustifyHorizontalIcon],svg[gravity-ui-objects-align-justify-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 1a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V1.75a.75.75 0 0 1 .75-.75M11 4v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5m-.5-2a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm.5 8.5V12a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 12v-1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5m-.5-2a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zM1 1.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignJustifyHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignJustifyVerticalIcon],svg[gravity-ui-objects-align-justify-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 14.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 .75.75M12 11h-1.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5m2-.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2zm-8.5.5H4a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 4 5h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5m2-.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2zM14.25 1a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignJustifyVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignLeftIcon],svg[gravity-ui-objects-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-1.5 0zM6.5 5.5V4a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5M5 4a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm1.5 8v-1.5A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5M5 10.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignRightIcon],svg[gravity-ui-objects-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 1.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0zM9.5 5.5V4a.5.5 0 0 0-.5-.5H3.5A.5.5 0 0 0 3 4v1.5a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .5-.5M11 4a2 2 0 0 0-2-2H3.5a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2H9a2 2 0 0 0 2-2zm-1.5 8v-1.5A.5.5 0 0 0 9 10H7a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5m1.5-1.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignTopIcon],svg[gravity-ui-objects-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 2a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM5.5 6.5H4a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M4 5a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm8 1.5h-1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M10.5 5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2H12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiOctagonXmarkIcon],svg[gravity-ui-octagon-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.829 2.5h4.342a.5.5 0 0 1 .354.146l2.829 2.829a.5.5 0 0 1 .146.353v4.344a.5.5 0 0 1-.146.353l-2.829 2.829a.5.5 0 0 1-.354.146H5.83a.5.5 0 0 1-.354-.146l-2.829-2.829a.5.5 0 0 1-.146-.354V5.829a.5.5 0 0 1 .147-.353l2.828-2.829a.5.5 0 0 1 .354-.146m-1.415-.914A2 2 0 0 1 5.83 1h4.342a2 2 0 0 1 1.415.586l2.828 2.828A2 2 0 0 1 15 5.828v4.343a2 2 0 0 1-.586 1.415l-2.828 2.828A2 2 0 0 1 10.17 15H5.83a2 2 0 0 1-1.415-.586l-2.828-2.828A2 2 0 0 1 1 10.17V5.828a2 2 0 0 1 .586-1.414zM6.53 5.47a.75.75 0 1 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiOctagonXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiOfficeBadgeIcon],svg[gravity-ui-office-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 1.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM5.25 4a.75.75 0 0 1 0 1.5H4A1.5 1.5 0 0 0 2.5 7v4A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.25a.75.75 0 0 1 0-1.5H12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm6 4.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5zM9 10.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiOfficeBadgeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPaletteIcon],svg[gravity-ui-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.012 10c.431.004.764-.15 1.002-.411c.244-.268.486-.762.486-1.589a5.5 5.5 0 1 0-5.17 5.491a4.3 4.3 0 0 1-.106-.89a2.37 2.37 0 0 1 .495-1.48c.386-.493.92-.763 1.448-.914C10.69 10.06 11.303 10 12 10zM8.43 14.01v-.005zM12 11.5c1.66.013 3-1.25 3-3.5a7 7 0 1 0-7 7c2.19 0 2.011-.83 1.827-1.68c-.194-.898-.393-1.82 2.173-1.82M9 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 2.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4.75-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5.75 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPaletteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPaperPlaneIcon],svg[gravity-ui-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.29 13.904L5.25 10.75L2.096 8.71a2.4 2.4 0 0 1 .5-4.278l9.273-3.296a2.346 2.346 0 0 1 2.996 2.995L13.45 3.63a.844.844 0 0 0-1.08-1.08L3.1 5.846a.9.9 0 0 0-.19 1.604l2.78 1.799l3.279-3.28a.75.75 0 1 1 1.06 1.061L6.75 10.31l1.799 2.779a.9.9 0 0 0 1.604-.188l3.297-9.272l1.413.502l-3.296 9.273a2.4 2.4 0 0 1-4.277.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPaperPlaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPaperclipIcon],svg[gravity-ui-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.77 10.73l.01-.01l3.08-3.08a3.889 3.889 0 1 0-5.5-5.5L4.73 4.77l-.01.01l-1.667 1.666a5.303 5.303 0 0 0 7.5 7.5l3.167-3.166a.75.75 0 1 0-1.061-1.06l-3.166 3.166a3.803 3.803 0 1 1-5.379-5.379L5.33 6.291l.011-.01L8.421 3.2a2.39 2.39 0 0 1 3.38 3.378l-1.13 1.13l-.012.012l-2.995 2.994a.975.975 0 1 1-1.378-1.378L9.28 6.34a.75.75 0 0 0-1.06-1.06L5.225 8.274a2.475 2.475 0 0 0 3.5 3.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPaperclipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPassportIcon],svg[gravity-ui-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 3v10a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5M2 13a2 2 0 0 0 2 2h7a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4a2 2 0 0 0-2 2zm3.5-2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M9 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPassportIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPauseIcon],svg[gravity-ui-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 3h1.75a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5m-2 .5a2 2 0 0 1 2-2h1.75a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2zm9.25-.5h1.75a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1.75a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5m-2 .5a2 2 0 0 1 2-2h1.75a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-1.75a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPauseFillIcon],svg[gravity-ui-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 3.5a2 2 0 0 1 2-2H5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2zm7.5 0a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPauseFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPencilIcon],svg[gravity-ui-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.423 1A3.577 3.577 0 0 1 15 4.577c0 .27-.108.53-.3.722l-.528.529l-1.971 1.971l-5.059 5.059a3 3 0 0 1-1.533.82l-2.638.528a1 1 0 0 1-1.177-1.177l.528-2.638a3 3 0 0 1 .82-1.533l5.059-5.059l2.5-2.5c.191-.191.451-.299.722-.299m-2.31 4.009l-4.91 4.91a1.5 1.5 0 0 0-.41.766l-.38 1.903l1.902-.38a1.5 1.5 0 0 0 .767-.41l4.91-4.91a2.08 2.08 0 0 0-1.88-1.88m3.098.658a3.6 3.6 0 0 0-1.878-1.879l1.28-1.28c.995.09 1.788.884 1.878 1.88z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPencilToLineIcon],svg[gravity-ui-pencil-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.238 3.64a1.854 1.854 0 0 0-1.629-1.628l-.8.8a3.37 3.37 0 0 1 1.63 1.628zM4.74 7.88l3.87-3.868a1.854 1.854 0 0 1 1.628 1.629L6.369 9.51a1.5 1.5 0 0 1-.814.418l-1.48.247l.247-1.48a1.5 1.5 0 0 1 .418-.814M9.72.78l-2 2l-4.04 4.04a3 3 0 0 0-.838 1.628L2.48 10.62a1 1 0 0 0 1.151 1.15l2.17-.36a3 3 0 0 0 1.629-.839l4.04-4.04l2-2c.18-.18.28-.423.28-.677A3.353 3.353 0 0 0 10.397.5c-.254 0-.498.1-.678.28M2.75 13a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPencilToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPencilToSquareIcon],svg[gravity-ui-pencil-to-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.169 6.331a3 3 0 0 0-.833 1.6l-.338 1.912a1 1 0 0 0 1.159 1.159l1.912-.338a3 3 0 0 0 1.6-.833l3.07-3.07l2-2A.9.9 0 0 0 15 4.13A3.13 3.13 0 0 0 11.87 1a.9.9 0 0 0-.632.262l-2 2zm3.936-1.814L7.229 7.392a1.5 1.5 0 0 0-.416.8L6.6 9.4l1.208-.213l.057-.01a1.5 1.5 0 0 0 .743-.406l2.875-2.876a1.63 1.63 0 0 0-1.378-1.378m2.558.199a3.14 3.14 0 0 0-1.379-1.38l.82-.82a1.63 1.63 0 0 1 1.38 1.38zM8 2.25a.75.75 0 0 0-.75-.75H4.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.75a.75.75 0 0 0-1.5 0v2.75a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h2.75A.75.75 0 0 0 8 2.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPencilToSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPercentIcon],svg[gravity-ui-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 7.5a3 3 0 1 1 0-6a3 3 0 0 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5.5 10a3 3 0 1 1 0-6a3 3 0 1 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m.78-8.22a.75.75 0 0 0-1.06-1.06l-10.5 10.5a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPercentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonIcon],svg[gravity-ui-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10s3.162.44 4.18 1.041c1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1m5.5-4c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonGearIcon],svg[gravity-ui-person-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiPersonGear0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M7 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m-.5 1.299c0-.43-.36-.774-.785-.724C2.473 8.955 0 10.728 0 12.5A2.5 2.5 0 0 0 2.5 15h3.25a.75.75 0 0 0 0-1.5H2.5a1 1 0 0 1-1-1c0-.205.22-.809 1.32-1.459c.765-.452 1.792-.813 2.969-.964c.397-.051.711-.378.711-.778m8.002 1.89a2.22 2.22 0 0 1-1.66-2.138l-.68-.256a2.38 2.38 0 0 1-2.747.816l-.406.569c.57.788.57 1.87 0 2.657l.406.569a2.38 2.38 0 0 1 2.747.816l.68-.255a2.22 2.22 0 0 1 1.66-2.139zm-.112-2.396a.715.715 0 0 0-.418-.921l-1.798-.674a.865.865 0 0 0-1.114.506a.87.87 0 0 1-1.32.395a.884.884 0 0 0-1.23.2L7.434 9.805a.77.77 0 0 0 .179 1.076c.43.308.43.948 0 1.255a.77.77 0 0 0-.18 1.076l1.077 1.506a.884.884 0 0 0 1.23.2a.87.87 0 0 1 1.32.395a.865.865 0 0 0 1.114.506l1.798-.674a.715.715 0 0 0 .418-.92a.715.715 0 0 1 .67-.966h.134a.81.81 0 0 0 .809-.809v-1.883a.81.81 0 0 0-.809-.808h-.135a.715.715 0 0 1-.669-.966m-1.833 2.659a1.052 1.052 0 1 1-2.103 0a1.052 1.052 0 0 1 2.103 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiPersonGear0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiPersonGearIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonMagnifierIcon],svg[gravity-ui-person-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M8 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1 1.225a.71.71 0 0 0-.679-.72A11 11 0 0 0 8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h3.25a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10q.088 0 .175.002c.442.008.825-.335.825-.777m4 3.275a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 1.5a3 3 0 0 1-1.524-.415L10.03 15.03a.75.75 0 1 1-1.06-1.06l1.445-1.446A3 3 0 1 1 13 14" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonMagnifierIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonNutHexIcon],svg[gravity-ui-person-nut-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m-.5 1.299c0-.43-.36-.774-.785-.724C2.473 8.955 0 10.728 0 12.5A2.5 2.5 0 0 0 2.5 15h3.25a.75.75 0 0 0 0-1.5H2.5a1 1 0 0 1-1-1c0-.205.22-.809 1.32-1.459c.765-.452 1.792-.813 2.969-.964c.397-.051.711-.378.711-.778m6.373 5.201l1.406-2.5l-1.406-2.5h-2.746L8.721 12l1.406 2.5zm2.713-1.765a1.5 1.5 0 0 0 0-1.47l-1.406-2.5A1.5 1.5 0 0 0 12.873 8h-2.746a1.5 1.5 0 0 0-1.307.765l-1.406 2.5a1.5 1.5 0 0 0 0 1.47l1.406 2.5a1.5 1.5 0 0 0 1.307.765h2.746a1.5 1.5 0 0 0 1.307-.765zM12.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonNutHexIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonPencilIcon],svg[gravity-ui-person-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M8 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1 1.225a.71.71 0 0 0-.679-.72A11 11 0 0 0 8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h2.25a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10q.088 0 .175.002c.442.008.825-.335.825-.777m3.59.307c.434.102.776.444.879.878l-2.823 2.822a1.5 1.5 0 0 1-.848.425l-.53.075l.075-.53a1.5 1.5 0 0 1 .425-.848zm-.883 4.76l3.068-3.067a.77.77 0 0 0 .225-.543A2.683 2.683 0 0 0 12.318 8a.77.77 0 0 0-.543.224l-3.068 3.069a3 3 0 0 0-.848 1.697l-.17 1.19a1 1 0 0 0 1.13 1.131l1.191-.17a3 3 0 0 0 1.697-.848" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonPlanetEarthIcon],svg[gravity-ui-person-planet-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m3.229 3.909l-.702-.28a2.5 2.5 0 0 1 3.339-1.975c-.121.185-.303.33-.523.403l-.035.012a.951.951 0 0 0 0 1.805l.46.154a.66.66 0 0 1 .383.331a.66.66 0 0 0 .957.254l.365-.242a2.5 2.5 0 0 1-2.4 2.128a.8.8 0 0 0 .041-.247v-.08a.686.686 0 0 0-.685-.686a.686.686 0 0 1-.686-.686v-.132a.82.82 0 0 0-.514-.76M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M6.25 8.525c.414-.028.75.31.75.725c0 .414-.336.747-.75.78c-1.369.107-2.567.5-3.43 1.011c-1.1.65-1.32 1.255-1.32 1.459a1 1 0 0 0 1 1h3.75a.75.75 0 0 1 0 1.5H2.5A2.5 2.5 0 0 1 0 12.5c0-1.868 2.75-3.737 6.25-3.975" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonPlanetEarthIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonPlusIcon],svg[gravity-ui-person-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M8 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1 1.225a.71.71 0 0 0-.679-.72A11 11 0 0 0 8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h8.75a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10q.088 0 .175.002c.442.008.825-.335.825-.777M13.75 8a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V12a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonSpeakerIcon],svg[gravity-ui-person-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10s3.162.44 4.18 1.041c1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-.25a.75.75 0 0 0 0 1.5h.25a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4s-7 2-7 4A2.5 2.5 0 0 0 3.5 15h.25a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1m3.335-.92a.75.75 0 0 0-.68 1.336l.02.012q.034.02.11.074c.098.074.237.195.38.373c.193.242.404.604.512 1.125H5.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-.427c.108-.52.319-.883.513-1.125c.142-.178.281-.299.38-.373a1 1 0 0 1 .128-.086a.75.75 0 0 0-.68-1.337l.336.671a61 61 0 0 0-.336-.67h-.003l-.004.003l-.01.005l-.1.058a3 3 0 0 0-.231.156a3.6 3.6 0 0 0-.652.636c-.377.471-.733 1.146-.863 2.062H7.7c-.13-.916-.486-1.59-.863-2.062a3.6 3.6 0 0 0-.652-.636a3 3 0 0 0-.331-.214l-.01-.005l-.004-.002l-.002-.001c-.001 0-.002 0-.337.67z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonSpeakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonWorkerIcon],svg[gravity-ui-person-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.535 3A3.5 3.5 0 0 1 7.25.08v1.67a.75.75 0 1 0 1.5 0V.08A3.5 3.5 0 0 1 11.464 3h.286a.75.75 0 0 1 0 1.5h-.25a3.5 3.5 0 0 1-7 0h-.25a.75.75 0 0 1 0-1.5zM8 6.5a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2m-5.5 6c0-.204.22-.809 1.32-1.459a6 6 0 0 1 .223-.125L5.01 13.5H3.5a1 1 0 0 1-1-1m4.114 1l-1.179-3.142A9.2 9.2 0 0 1 8 10c.93 0 1.8.135 2.565.357L9.387 13.5zm4.375 0H12.5a1 1 0 0 0 1-1c0-.204-.22-.809-1.32-1.459a6 6 0 0 0-.223-.125zM8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonWorkerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonXmarkIcon],svg[gravity-ui-person-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M8 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1 1.225a.71.71 0 0 0-.679-.72A11 11 0 0 0 8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h8.75a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10q.088 0 .175.002c.442.008.825-.335.825-.777m4-.286l-.97-.97a.75.75 0 1 0-1.06 1.061l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 0 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonsIcon],svg[gravity-ui-persons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-3.029 2.886c-.777.54-.971 1.063-.971 1.306c0 .446.362.808.808.808h6.384a.81.81 0 0 0 .808-.808c0-.244-.194-.767-.971-1.306C7.792 9.875 6.719 9.5 5.5 9.5s-2.292.375-3.029.886M0 11.692C0 9.846 2.475 8 5.5 8c1.18 0 2.278.281 3.177.734A5.67 5.67 0 0 1 11.5 8c2.475 0 4.5 1.538 4.5 3.077A1.923 1.923 0 0 1 14.077 13h-3.483c-.416.604-1.113 1-1.902 1H2.308A2.31 2.31 0 0 1 0 11.692m10.991-.192h3.086c.234 0 .423-.19.423-.423c0-.103-.096-.472-.688-.89c-.554-.393-1.375-.687-2.312-.687c-.517 0-.999.09-1.42.236c.526.534.854 1.146.911 1.764M12.5 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPersonsLockIcon],svg[gravity-ui-persons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-.75 1.25a.75.75 0 0 1 .75-.75c1.238 0 2.363.385 3.178.962C15.496 8.04 16 8.81 16 9.577a1.923 1.923 0 0 1-1.923 1.923h-.327a.75.75 0 0 1 0-1.5h.327c.234 0 .423-.19.423-.423c0-.105-.099-.474-.688-.89C13.257 8.293 12.437 8 11.5 8a.75.75 0 0 1-.75-.75M2.188 8.686C2.743 8.294 3.563 8 4.5 8a.75.75 0 0 0 0-1.5c-1.238 0-2.363.385-3.178.962C.504 8.04 0 8.81 0 9.577C0 10.639.861 11.5 1.923 11.5h.327a.75.75 0 0 0 0-1.5h-.327a.423.423 0 0 1-.423-.423c0-.105.099-.474.688-.89M4.5 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6.25 3.5h-.25V9a2.5 2.5 0 1 0-5 0v.5h-.25c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25M9 9v.5H7V9a1 1 0 1 1 2 0m-3.5 2v2.5h5V11z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPersonsLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPictureIcon],svg[gravity-ui-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v5.027l.962-.7a1.75 1.75 0 0 1 2.079.016l.928.696l2.368-2.03a1.75 1.75 0 0 1 2.325.043L13 8.787V4.5A1.5 1.5 0 0 0 11.5 3m3 7.498V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3zm-1.5.33l-2.355-2.174a.25.25 0 0 0-.332-.006L7.488 11.07l-.457.392l-.481-.361l-1.41-1.057a.25.25 0 0 0-.296-.002L3 11.381v.119A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5zM7.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPictureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPillIcon],svg[gravity-ui-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.922 3.7L7.81 4.81L6.444 6.179a3.326 3.326 0 0 0 3.378 3.378L11.19 8.19l1.11-1.11A2.39 2.39 0 0 0 8.922 3.7M7 3.5l-2 2l-2.36 2.36a3.89 3.89 0 1 0 5.5 5.5L10.5 11l2-2l.86-.86a3.889 3.889 0 1 0-5.5-5.5zm.078 8.8l1.413-1.412A4.85 4.85 0 0 1 5.11 7.51L3.7 8.922A2.39 2.39 0 0 0 7.078 12.3m.892-6.33a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPinIcon],svg[gravity-ui-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M8 4.5c.506 0 .99-.04 1.436-.118l.84 2.352l.253.707l.717.221c.648.2 1.055.44 1.277.65c.192.18.227.31.227.438c0 .14-.055.488-.937.878c-.869.384-2.2.622-3.813.622s-2.944-.238-3.813-.622c-.882-.39-.937-.738-.937-.878c0-.128.035-.259.227-.439c.222-.209.629-.448 1.277-.649l.717-.221l.253-.707l.84-2.352c.445.079.93.118 1.436.118m4-2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984c0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25C4 .75 5.79 0 8 0s4 .75 4 2.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPinFillIcon],svg[gravity-ui-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M12 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984c0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25C4 .75 5.79 0 8 0s4 .75 4 2.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPinFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPinSlashIcon],svg[gravity-ui-pin-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c0 .008-.002.024.005.048L4.38 1.179C5.02.393 6.4 0 8 0c2.21 0 4 .75 4 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 .617-.266 1.138-.734 1.565l-1.061-1.061c.27-.227.295-.41.295-.503c0-.128-.035-.259-.226-.439c-.223-.209-.63-.448-1.278-.649l-.552-.17l-.228-.228l-.19-.53l-.84-2.352a8.3 8.3 0 0 1-1.739.113l-1.96-1.96q.054.034.125.07C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351m-.008 9.297l2.478 2.478a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06l2.567 2.567l-.226.632C2.758 6.71 1.75 7.55 1.75 8.75c0 1.854 2.402 2.848 5.5 2.985V15a.75.75 0 0 0 1.5 0v-3.266a14 14 0 0 0 1.742-.182m-1.345-1.345L5.71 6.771l-.239.67l-.717.221c-.648.2-1.055.44-1.277.65c-.192.18-.227.31-.227.438c0 .14.055.488.937.878c.869.384 2.2.622 3.813.622q.601 0 1.147-.043" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPinSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPinSlashFillIcon],svg[gravity-ui-pin-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c0 .008-.002.024.005.048L4.38 1.179C5.02.393 6.4 0 8 0c2.21 0 4 .75 4 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 .617-.266 1.138-.734 1.565L5.738 2.536q.052.033.124.07C6.297 2.83 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M4.537 5.597l-.226.632C2.758 6.71 1.75 7.55 1.75 8.75c0 1.854 2.402 2.848 5.5 2.985V15a.75.75 0 0 0 1.5 0v-3.266a14 14 0 0 0 1.742-.182l2.478 2.478a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPinSlashFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPipelineIcon],svg[gravity-ui-pipeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.75A.75.75 0 0 1 .75 1h6a.75.75 0 0 1 0 1.5H6.5v2.25a.5.5 0 0 0 .5.5h2.25A5.75 5.75 0 0 1 15 11v2.5h.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h.25v-2.25a.5.5 0 0 0-.5-.5H6.75A5.75 5.75 0 0 1 1 5V2.5H.75A.75.75 0 0 1 0 1.75M11 13.5h2.5V11a4.25 4.25 0 0 0-4.25-4.25h-.5v2.5H9a2 2 0 0 1 2 2zm-8.5-11H5v2.25a2 2 0 0 0 2 2h.25v2.5h-.5A4.25 4.25 0 0 1 2.5 5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPipelineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlanetEarthIcon],svg[gravity-ui-planet-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5c1.63 0 3.094-.709 4.101-1.835A2.5 2.5 0 0 1 10.25 9.25V9a.75.75 0 0 0-.75-.75a2.25 2.25 0 0 1 0-4.5a.75.75 0 0 0 .75-.75v-.02a5.5 5.5 0 0 0-7.471 3.287A2.25 2.25 0 0 1 4.75 8.5c0 .414.336.75.75.75a2.25 2.25 0 0 1 1.265 4.11q.597.139 1.235.14m-3.491-1.25H5.5a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 3.25 8.5a.75.75 0 0 0-.744-.75a5.49 5.49 0 0 0 2.003 4.5m8.241-2h.27A5.5 5.5 0 0 0 13.5 8c0-1.665-.74-3.158-1.91-4.166A2.25 2.25 0 0 1 9.5 5.25a.75.75 0 1 0 0 1.5A2.25 2.25 0 0 1 11.75 9v.25a1 1 0 0 0 1 1M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPlanetEarthIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlayIcon],svg[gravity-ui-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiPlay0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.006 7.134L5.5 2.217a1 1 0 0 0-1.5.866v9.834a1 1 0 0 0 1.5.866l8.506-4.917a1 1 0 0 0 0-1.732m.75 3.03c1.665-.962 1.665-3.366 0-4.329L6.251.918C4.585-.045 2.5 1.158 2.5 3.083v9.834c0 1.925 2.085 3.128 3.751 2.164z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiPlay0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlayFillIcon],svg[gravity-ui-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiPlayFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.756 10.164c1.665-.962 1.665-3.366 0-4.329L6.251.918C4.585-.045 2.5 1.158 2.5 3.083v9.834c0 1.925 2.085 3.128 3.751 2.164z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiPlayFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiPlayFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlugConnectionIcon],svg[gravity-ui-plug-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 1.53A.75.75 0 0 0 14.47.47l-1.29 1.29a4.24 4.24 0 0 0-5.423.483l-.58.58a.96.96 0 0 0 0 1.354l4.646 4.646a.96.96 0 0 0 1.354 0l.58-.58a4.24 4.24 0 0 0 .484-5.423zm-8.5 4.94a.75.75 0 0 1 0 1.06L5.78 8.78l1.44 1.44l1.25-1.25a.75.75 0 0 1 1.06 1.06l-1.25 1.25l.543.543a.96.96 0 0 1 0 1.354l-.58.58a4.24 4.24 0 0 1-5.423.484l-1.29 1.29A.75.75 0 0 1 .47 14.47l1.29-1.29a4.24 4.24 0 0 1 .483-5.423l.58-.58a.96.96 0 0 1 1.354 0l.543.543l1.25-1.25a.75.75 0 0 1 1.06 0M3.5 8.62l-.197.197a2.743 2.743 0 0 0 3.879 3.879l.197-.197zm9.197-1.439l-.197.197L8.621 3.5l.197-.197a2.743 2.743 0 0 1 3.879 3.879" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPlugConnectionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlugWireIcon],svg[gravity-ui-plug-wire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiPlugWire0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.89 4.111a5.5 5.5 0 0 0-7.78 0c-2.599 2.6-2.12 5.657-1.06 6.718a.75.75 0 0 0 1.06 0l.925-.925a3.09 3.09 0 0 1-.173-2.843l.547-1.23a1 1 0 0 1 1.62-.302l.19.19l.75-.75A.75.75 0 1 1 9.03 6.03l-.75.75l.94.94l.75-.75a.75.75 0 1 1 1.06 1.06l-.75.75l.19.19a1 1 0 0 1-.3 1.621l-1.231.547a3.09 3.09 0 0 1-2.843-.173l-.924.924a2.25 2.25 0 0 1-3.182 0C.222 10.122-.007 6.107 3.05 3.05a7 7 0 1 1 2.983 11.67a.75.75 0 1 1 .42-1.44a5.5 5.5 0 0 0 5.436-9.168m-5.658 3.56l.252-.566l2.411 2.411l-.566.252A1.589 1.589 0 0 1 6.232 7.67" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiPlugWire0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiPlugWireIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlusIcon],svg[gravity-ui-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlusShapeIcon],svg[gravity-ui-plus-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 9.5h3.75a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H9.5V2.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25V6.5H2.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25H6.5v3.75c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25zM5 5H2.75A1.75 1.75 0 0 0 1 6.75v2.5c0 .966.784 1.75 1.75 1.75H5v2.25c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 11 13.25V11h2.25A1.75 1.75 0 0 0 15 9.25v-2.5A1.75 1.75 0 0 0 13.25 5H11V2.75A1.75 1.75 0 0 0 9.25 1h-2.5A1.75 1.75 0 0 0 5 2.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPlusShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlusShapeFillIcon],svg[gravity-ui-plus-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 11v2.5A1.5 1.5 0 0 1 9.5 15h-3A1.5 1.5 0 0 1 5 13.5V11H2.5A1.5 1.5 0 0 1 1 9.5v-3A1.5 1.5 0 0 1 2.5 5H5V2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V5h2.5A1.5 1.5 0 0 1 15 6.5v3a1.5 1.5 0 0 1-1.5 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPlusShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPowerIcon],svg[gravity-ui-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 1.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0zM4.92 3.442A.75.75 0 1 0 4.08 2.2a7 7 0 1 0 7.841 0a.75.75 0 1 0-.841 1.242a5.5 5.5 0 1 1-6.159 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPowerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPrinterIcon],svg[gravity-ui-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 2.5h-5.5a.75.75 0 0 0-.75.75V4h7v-.75a.75.75 0 0 0-.75-.75M13 4v-.75A2.25 2.25 0 0 0 10.75 1h-5.5A2.25 2.25 0 0 0 3 3.25V4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1h1a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-9 6v.5H3A1.5 1.5 0 0 1 1.5 9V7A1.5 1.5 0 0 1 3 5.5h10A1.5 1.5 0 0 1 14.5 7v2a1.5 1.5 0 0 1-1.5 1.5h-1V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m6-.5H6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5m2.5-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPrinterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPulseIcon],svg[gravity-ui-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiPulse0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M9.235 1a.75.75 0 0 1 .74.56l2.034 7.726l1.09-1.908A.75.75 0 0 1 13.75 7h1.5a.75.75 0 0 1 0 1.5h-1.065l-1.784 3.122a.75.75 0 0 1-1.376-.181l-1.71-6.496l-2.083 9.466a.75.75 0 0 1-1.446.07L3.544 7.55l-.65 1.085A.75.75 0 0 1 2.25 9H.75a.75.75 0 1 1 0-1.5h1.075l1.282-2.136a.75.75 0 0 1 1.357.155l1.898 5.868l2.156-9.798A.75.75 0 0 1 9.235 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiPulse0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiPuzzleIcon],svg[gravity-ui-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.731 4H4.5A1.5 1.5 0 0 0 3 5.5v.377a2.72 2.72 0 0 1 0 5.246v.377A1.5 1.5 0 0 0 4.5 13h.377a2.72 2.72 0 0 1 5.246 0h.377a1.5 1.5 0 0 0 1.5-1.5v-1.232l1-.353a1.501 1.501 0 0 0 0-2.83l-1-.354V5.5A1.5 1.5 0 0 0 10.5 4H9.269l-.354-1a1.501 1.501 0 0 0-2.83 0zM8.9 14.5l-.204-1.02a1.22 1.22 0 0 0-2.392 0L6.1 14.5H4.5a3 3 0 0 1-3-3V9.9l1.02-.204a1.22 1.22 0 0 0 0-2.392L1.5 7.1V5.5a3 3 0 0 1 3-3h.17a3.001 3.001 0 0 1 5.66 0h.17a3 3 0 0 1 3 3v.17a3.001 3.001 0 0 1 0 5.66v.17a3 3 0 0 1-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPuzzleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiQrCodeIcon],svg[gravity-ui-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2.25a.75.75 0 0 0-1.5 0v5h-5a.75.75 0 0 0 0 1.5h5.5a1 1 0 0 0 1-1zM7.25 11a1 1 0 0 1 1-1H11a.75.75 0 0 1 0 1.5H8.75v2.25a.75.75 0 0 1-1.5 0zM13 13h-2.25a.75.75 0 0 0 0 1.5h2.75a1 1 0 0 0 1-1V8.25a1 1 0 0 0-1-1h-2.75a.75.75 0 0 0 0 1.5H13zM3 4.5V3h1.5v1.5zm-1.5-2a1 1 0 0 1 1-1H5a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1zm1.5 9V13h1.5v-1.5zM2.5 10a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm9-5.5V3H13v1.5zm-1.5-2a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiQrCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiQuoteCloseIcon],svg[gravity-ui-quote-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiQuoteClose0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3.589 9.67A2.75 2.75 0 0 1 1.5 7v-.25A2.75 2.75 0 0 1 4.25 4h.25a2.747 2.747 0 0 1 2.748 2.657v.003h.002V7q0 .197-.027.386q-.03.392-.09.77a8 8 0 0 1-.559 1.918a7.2 7.2 0 0 1-2.162 2.801l-.098.076A.24.24 0 0 1 4.17 13a.25.25 0 0 1-.22-.367a17 17 0 0 0 .65-1.384c.197-.474.396-1.013.557-1.578a2.7 2.7 0 0 1-.657.079h-.25q-.343-.001-.661-.08m-.549 1.405A4.25 4.25 0 0 1 0 7v-.25A4.25 4.25 0 0 1 4.25 2.5h.25c1.452 0 2.733.728 3.5 1.838A4.25 4.25 0 0 1 11.5 2.5h.25A4.25 4.25 0 0 1 16 6.664V7q0 .275-.035.543c-.207 2.62-1.358 4.966-3.488 6.599a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86a4.25 4.25 0 0 1-2.005-1.297a8.76 8.76 0 0 1-3.058 4.363a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86m7.8-1.406q.318.079.661.08h.25a2.8 2.8 0 0 0 .657-.079a14 14 0 0 1-.68 1.865a18 18 0 0 1-.527 1.097a.25.25 0 0 0 .22.367a.24.24 0 0 0 .144-.049l.098-.076q.452-.358.832-.768a7.2 7.2 0 0 0 1.39-2.172a8 8 0 0 0 .498-1.779a9 9 0 0 0 .091-.77q.027-.19.027-.386v-.339H14.5v-.004A2.747 2.747 0 0 0 11.75 4h-.251a2.75 2.75 0 0 0-2.75 2.75V7c0 1.29.89 2.374 2.089 2.67" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiQuoteClose0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiQuoteCloseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiQuoteOpenIcon],svg[gravity-ui-quote-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiQuoteOpen0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M12.411 6.33A2.75 2.75 0 0 1 14.5 9v.25A2.75 2.75 0 0 1 11.75 12h-.25a2.747 2.747 0 0 1-2.748-2.657V9.34H8.75V9q0-.197.027-.386q.03-.392.09-.77a8 8 0 0 1 .559-1.918a7.2 7.2 0 0 1 2.162-2.801l.098-.076A.24.24 0 0 1 11.83 3c.186 0 .306.202.22.367a19 19 0 0 0-.22.433a18 18 0 0 0-.43.951a14 14 0 0 0-.557 1.578l.054-.013a2.8 2.8 0 0 1 .603-.066h.25q.343.001.661.08m.549-1.405A4.25 4.25 0 0 1 16 9v.25a4.25 4.25 0 0 1-4.25 4.25h-.25A4.25 4.25 0 0 1 8 11.662A4.25 4.25 0 0 1 4.5 13.5h-.25A4.25 4.25 0 0 1 0 9.336V9q0-.275.035-.543c.207-2.62 1.358-4.966 3.488-6.599A1.74 1.74 0 0 1 4.58 1.5c1.341 0 2.146 1.425 1.548 2.564c-.111.211-.26.508-.418.86c.788.234 1.481.69 2.005 1.297a8.76 8.76 0 0 1 3.058-4.363A1.74 1.74 0 0 1 11.83 1.5c1.341 0 2.146 1.425 1.548 2.564c-.111.211-.26.508-.418.86M5.16 6.33a2.8 2.8 0 0 0-.661-.08h-.25a2.8 2.8 0 0 0-.657.079a14 14 0 0 1 .68-1.865A18 18 0 0 1 4.8 3.367A.25.25 0 0 0 4.58 3a.24.24 0 0 0-.144.049a8 8 0 0 0-.93.844a7.2 7.2 0 0 0-1.39 2.172a8 8 0 0 0-.498 1.779q-.062.378-.091.77A3 3 0 0 0 1.5 9v.339h.001v.004A2.747 2.747 0 0 0 4.25 12h.251a2.75 2.75 0 0 0 2.75-2.75V9c0-1.29-.89-2.374-2.089-2.67" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiQuoteOpen0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiQuoteOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiReceiptIcon],svg[gravity-ui-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.3 2L3.9.5L2 2v13.5l1.5-.776L4.9 14l2.4 1.5L9.7 14l2.4 1.5L14 14V.5l-1.5.776L11.1 2L8.7.5zm2.4.269L7.095 3.272l-.795.497l-.795-.497l-1.504-.94l-.501.395v10.308l.71-.367l.76-.393l.725.453L7.3 13.731l1.605-1.003l.795-.497l.795.497l1.504.94l.501-.395V2.965l-.71.367l-.76.393l-.725-.453zM5 6.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 6.5m.75 2.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiReceiptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiRectanglePulseIcon],svg[gravity-ui-rectangle-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiRectanglePulse0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12.5h-9A1.5 1.5 0 0 1 2 11V9h3a.75.75 0 0 0 .648-.372l1.02-1.748l1.9 4.18a.75.75 0 0 0 1.33.068L11.43 8.5H14V11a1.5 1.5 0 0 1-1.5 1.5M14 7h-3a.75.75 0 0 0-.648.372L9.332 9.12l-1.9-4.18a.75.75 0 0 0-1.33-.068L4.57 7.5H2V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 14 5zM3.5 14h9a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiRectanglePulse0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiRectanglePulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiRectangles4Icon],svg[gravity-ui-rectangles-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 3h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m-2 .5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm9-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m-2 .5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm-3 6.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5m-2-1.5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm7 1.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m-2 .5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiRectangles4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiRocketIcon],svg[gravity-ui-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiRocket0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m6.993 5.628l-.787-.157l-1.118-.224a1.13 1.13 0 0 0-1.024.31L2.837 6.785a1.15 1.15 0 0 0-.285.474l1.02.185a6.19 6.19 0 0 1 4.985 4.985l.185 1.02c.178-.055.34-.152.474-.285l1.227-1.227c.268-.268.384-.652.31-1.024l-.224-1.118l-.157-.787l.567-.568l1.243-1.242A4.5 4.5 0 0 0 13.5 4.015V2.5h-1.515a4.5 4.5 0 0 0-3.182 1.318L7.561 5.061zM12 9.5l1.243-1.243A6 6 0 0 0 15 4.015V2.5A1.5 1.5 0 0 0 13.5 1h-1.515a6 6 0 0 0-4.242 1.757L6.5 4l-1.118-.224a2.63 2.63 0 0 0-2.379.72L1.777 5.724A2.65 2.65 0 0 0 1 7.598c0 .522.373.97.887 1.063l1.417.258a4.69 4.69 0 0 1 3.777 3.777l.258 1.417c.093.514.54.887 1.063.887c.703 0 1.377-.28 1.875-.777l1.226-1.226a2.63 2.63 0 0 0 .72-2.38zm-8.06 2.571c-.311-.31-.76-.28-1.005-.036c-.233.233-.423.658-.527 1.247a5 5 0 0 0-.05.366q.184-.019.377-.053c.596-.106 1.017-.296 1.24-.52c.245-.244.275-.693-.036-1.004M5 11.011c-.873-.874-2.273-.89-3.126-.036C.777 12.07.802 14.094.837 14.712c.007.12.06.23.145.315a.5.5 0 0 0 .32.145c.622.032 2.652.046 3.734-1.035c.853-.854.837-2.253-.036-3.126m6.78-5.73a.75.75 0 0 0-1.06-1.061l-1.5 1.5a.75.75 0 0 0 1.06 1.06z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiRocket0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiRocketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiRoundBracketsIcon],svg[gravity-ui-round-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.22 2.28a.75.75 0 0 1 1.06-1.06a9.59 9.59 0 0 1 0 13.56a.75.75 0 1 1-1.06-1.06a8.09 8.09 0 0 0 0-11.44m-6.44 0a.75.75 0 0 0-1.06-1.06a9.59 9.59 0 0 0 0 13.56a.75.75 0 0 0 1.06-1.06a8.09 8.09 0 0 1 0-11.44" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiRoundBracketsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiRouteIcon],svg[gravity-ui-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 1.5a2.75 2.75 0 0 1-2.646-2H4.577a.827.827 0 0 0-.238 1.619l7.753 2.326A2.327 2.327 0 0 1 11.423 13H6.397a2.751 2.751 0 1 1 0-1.5h5.026a.827.827 0 0 0 .238-1.619L3.908 7.556A2.327 2.327 0 0 1 4.577 3h5.027a2.751 2.751 0 1 1 2.646 3.5M5 12.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiRouteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSackIcon],svg[gravity-ui-sack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiSack0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.042.156a.75.75 0 0 1 .83-.057c.832.475 1.507.75 2.156.886c.644.134 1.304.139 2.116.023a.75.75 0 0 1 .83.94l-.562 2.06C12.957 5.758 14 10.142 14 12.75c0 2-3 3.25-6 3.25s-6-1.25-6-3.25c0-2.608 1.044-6.995 3.592-8.745L4.775.943a.75.75 0 0 1 .267-.787M7.992 5.6c.536.005 1.044-.116 1.605-.332c.55.385 1.047.983 1.486 1.785a3.9 3.9 0 0 1-2.96.706a.75.75 0 1 0-.246 1.48a5.4 5.4 0 0 0 3.83-.793c.543 1.494.793 3.122.793 4.303c0 .15-.114.568-1.046 1.033c-.875.438-2.136.717-3.454.717s-2.579-.279-3.454-.717C3.614 13.318 3.5 12.9 3.5 12.75c0-.41.03-.874.092-1.368a8.15 8.15 0 0 0 5.251 1.112a.75.75 0 1 0-.186-1.488c-1.719.215-3.356-.225-4.768-1.219c.199-.808.477-1.627.84-2.37c.485-.989 1.047-1.71 1.678-2.15c.549.2 1.053.329 1.586.334M6.646 2.135l.479 1.793c.364.12.633.17.882.173c.247.002.513-.042.87-.166l.368-1.347a6.7 6.7 0 0 1-2.599-.453" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiSack0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiSackIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiScalesBalancedIcon],svg[gravity-ui-scales-balanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 3h-4.5v10h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3h-4.5a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5M1.643 8.568l.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L3 5.854zM3 4c-.46 0-.88.26-1.085.67L.2 8.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819L4.085 4.671A1.21 1.21 0 0 0 3 4m8.643 4.568l.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L13 5.854zM13 4c-.46 0-.88.26-1.085.67L10.2 8.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819l-1.714-3.427A1.21 1.21 0 0 0 13 4" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiScalesBalancedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiScalesUnbalancedIcon],svg[gravity-ui-scales-unbalanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.983.843a.75.75 0 0 1-.576.89l-4.657.998V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.053l-4.343.93a.75.75 0 1 1-.314-1.466l10.5-2.25a.75.75 0 0 1 .89.576m-2.34 6.725l.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L13 4.854zM13 3c-.46 0-.88.26-1.085.67L10.2 7.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819l-1.714-3.427A1.21 1.21 0 0 0 13 3M1.643 9.568l.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L3 6.854zM3 5c-.46 0-.88.26-1.085.67L.2 9.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819L4.085 5.671A1.21 1.21 0 0 0 3 5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiScalesUnbalancedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiScissorsIcon],svg[gravity-ui-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-1.5a3 3 0 0 0 4.524 2.585L6.939 8l-.915.915a3 3 0 1 0 1.06 1.06L8.122 8.94l5.501 3.209a.75.75 0 1 0 .756-1.296L9.488 8l4.89-2.852a.75.75 0 0 0-.756-1.296l-5.5 3.209l-1.037-1.037A3 3 0 1 0 1.5 4.5m3 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiScissorsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSealCheckIcon],svg[gravity-ui-seal-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiSealCheck0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.515 3.5h.621l.44-.44l1.07-1.07a.5.5 0 0 1 .708 0l1.07 1.07l.44.44H12a.5.5 0 0 1 .5.5v2.136l.44.44l1.07 1.07a.5.5 0 0 1 0 .708l-1.07 1.07l-.44.44V12a.5.5 0 0 1-.5.5H9.864l-.44.44l-1.07 1.07a.5.5 0 0 1-.708 0l-1.07-1.07l-.44-.44H4a.5.5 0 0 1-.5-.5V9.864l-.44-.44l-1.07-1.07a.5.5 0 0 1 0-.708l1.07-1.07l.44-.44V4a.5.5 0 0 1 .5-.5zm3.9-2.571a2 2 0 0 0-2.83 0L5.516 2H4a2 2 0 0 0-2 2v1.515L.929 6.585a2 2 0 0 0 0 2.83L2 10.484V12a2 2 0 0 0 2 2h1.515l1.07 1.071a2 2 0 0 0 2.83 0L10.484 14H12a2 2 0 0 0 2-2v-1.515l1.071-1.07a2 2 0 0 0 0-2.83L14 5.516V4a2 2 0 0 0-2-2h-1.515zM11.1 6.45a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiSealCheck0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiSealCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSealPercentIcon],svg[gravity-ui-seal-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiSealPercent0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.515 3.5h.621l.44-.44l1.07-1.07a.5.5 0 0 1 .708 0l1.07 1.07l.44.44H12a.5.5 0 0 1 .5.5v2.136l.44.44l1.07 1.07a.5.5 0 0 1 0 .708l-1.07 1.07l-.44.44V12a.5.5 0 0 1-.5.5H9.864l-.44.44l-1.07 1.07a.5.5 0 0 1-.708 0l-1.07-1.07l-.44-.44H4a.5.5 0 0 1-.5-.5V9.864l-.44-.44l-1.07-1.07a.5.5 0 0 1 0-.708l1.07-1.07l.44-.44V4a.5.5 0 0 1 .5-.5zm3.9-2.571a2 2 0 0 0-2.83 0L5.516 2H4a2 2 0 0 0-2 2v1.515L.929 6.585a2 2 0 0 0 0 2.83L2 10.484V12a2 2 0 0 0 2 2h1.515l1.07 1.071a2 2 0 0 0 2.83 0L10.484 14H12a2 2 0 0 0 2-2v-1.515l1.071-1.07a2 2 0 0 0 0-2.83L14 5.516V4a2 2 0 0 0-2-2h-1.515zM6.53 10.53l4-4a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06M11 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiSealPercent0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiSealPercentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiServerIcon],svg[gravity-ui-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h8A1.5 1.5 0 0 1 13.5 5v2.25h-11V5A1.5 1.5 0 0 1 4 3.5M2.5 8.75V11A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V8.75zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm2.75.5a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5H7a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiServerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShapes3Icon],svg[gravity-ui-shapes-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiShapes30)"><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.075L10.193 6H5.807zM6.909.953a1.25 1.25 0 0 1 2.182 0l2.62 4.687A1.25 1.25 0 0 1 10.62 7.5H5.38a1.25 1.25 0 0 1-1.09-1.86zM4 15.25a3.5 3.5 0 1 1 .001-6.999A3.5 3.5 0 0 1 4 15.25m2-3.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 1.75h-3.5V10H14zM9 9.75c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-4C9.56 15 9 14.44 9 13.75z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiShapes30"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiShapes3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShapes4Icon],svg[gravity-ui-shapes-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiShapes40)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6.193 6L4 2.075L1.807 6zM5.091.953a1.25 1.25 0 0 0-2.182 0L.289 5.64A1.25 1.25 0 0 0 1.38 7.5h5.24a1.25 1.25 0 0 0 1.09-1.86zM2.534 14.929a3.5 3.5 0 1 0 2.932-6.36a3.5 3.5 0 0 0-2.932 6.36M4 13.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4M15.28 1.22a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0m-5.03 12.03v-3.5h3.5v3.5zM8.75 9.5c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiShapes40"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiShapes4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShieldIcon],svg[gravity-ui-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.003 4.702l4.22-2.025a1.8 1.8 0 0 1 1.554 0l4.22 2.025a.89.89 0 0 1 .503.8V6a8.55 8.55 0 0 1-3.941 7.201l-.986.631a1.06 1.06 0 0 1-1.146 0l-.986-.63A8.55 8.55 0 0 1 2.5 6v-.498c0-.341.196-.652.503-.8m3.57-3.377L2.354 3.35A2.39 2.39 0 0 0 1 5.502V6a10.05 10.05 0 0 0 4.632 8.465l.986.63a2.56 2.56 0 0 0 2.764 0l.986-.63A10.05 10.05 0 0 0 15 6v-.498c0-.918-.526-1.755-1.354-2.152l-4.22-2.025a3.3 3.3 0 0 0-2.852 0M8.47 9.97a.75.75 0 1 0 1.06 1.06c.575-.574 1.118-1.398 1.516-2.195c.386-.772.704-1.653.704-2.335a.75.75 0 0 0-1.5 0c0 .318-.182.937-.546 1.665c-.352.703-.809 1.379-1.234 1.805" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShieldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShieldCheckIcon],svg[gravity-ui-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.003 4.702l4.22-2.025a1.8 1.8 0 0 1 1.554 0l4.22 2.025a.89.89 0 0 1 .503.8V6a8.55 8.55 0 0 1-3.941 7.201l-.986.631a1.06 1.06 0 0 1-1.146 0l-.986-.63A8.55 8.55 0 0 1 2.5 6v-.498c0-.341.196-.652.503-.8m3.57-3.377L2.354 3.35A2.39 2.39 0 0 0 1 5.502V6a10.05 10.05 0 0 0 4.632 8.465l.986.63a2.56 2.56 0 0 0 2.764 0l.986-.63A10.05 10.05 0 0 0 15 6v-.498c0-.918-.526-1.755-1.354-2.152l-4.22-2.025a3.3 3.3 0 0 0-2.852 0M11.1 6.45a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShieldCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShieldExclamationIcon],svg[gravity-ui-shield-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.003 4.702l4.22-2.025a1.8 1.8 0 0 1 1.554 0l4.22 2.025a.89.89 0 0 1 .503.8V6a8.55 8.55 0 0 1-3.941 7.201l-.986.631a1.06 1.06 0 0 1-1.146 0l-.986-.63A8.55 8.55 0 0 1 2.5 6v-.498c0-.341.196-.652.503-.8m3.57-3.377L2.354 3.35A2.39 2.39 0 0 0 1 5.502V6a10.05 10.05 0 0 0 4.632 8.465l.986.63a2.56 2.56 0 0 0 2.764 0l.986-.63A10.05 10.05 0 0 0 15 6v-.498c0-.918-.526-1.755-1.354-2.152l-4.22-2.025a3.3 3.3 0 0 0-2.852 0M8 4.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 4.75m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShieldExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShieldKeyholeIcon],svg[gravity-ui-shield-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.003 4.702l4.22-2.025a1.8 1.8 0 0 1 1.554 0l4.22 2.025a.89.89 0 0 1 .503.8V6a8.55 8.55 0 0 1-3.941 7.201l-.986.631a1.06 1.06 0 0 1-1.146 0l-.986-.63A8.55 8.55 0 0 1 2.5 6v-.498c0-.341.196-.652.503-.8m3.57-3.377L2.354 3.35A2.39 2.39 0 0 0 1 5.502V6a10.05 10.05 0 0 0 4.632 8.465l.986.63a2.56 2.56 0 0 0 2.764 0l.986-.63A10.05 10.05 0 0 0 15 6v-.498c0-.918-.526-1.755-1.354-2.152l-4.22-2.025a3.3 3.3 0 0 0-2.852 0M9.5 7a1.5 1.5 0 0 1-.75 1.3v1.95a.75.75 0 0 1-1.5 0V8.3A1.5 1.5 0 1 1 9.5 7" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShieldKeyholeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShoppingBagIcon],svg[gravity-ui-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.174 3h5.652a1.5 1.5 0 0 1 1.49 1.328l.808 7A1.5 1.5 0 0 1 11.634 13H4.366a1.5 1.5 0 0 1-1.49-1.672l.808-7A1.5 1.5 0 0 1 5.174 3m-2.98 1.156A3 3 0 0 1 5.174 1.5h5.652a3 3 0 0 1 2.98 2.656l.808 7a3 3 0 0 1-2.98 3.344H4.366a3 3 0 0 1-2.98-3.344zM5 5.25a.75.75 0 0 1 1.5 0v.25a1.5 1.5 0 1 0 3 0v-.25a.75.75 0 0 1 1.5 0v.25a3 3 0 0 1-6 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShoppingBagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShoppingBasketIcon],svg[gravity-ui-shopping-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5h1.307a2.193 2.193 0 0 1 2.109 2.795l-1.294 4.53A3 3 0 0 1 11.237 14H4.763a3 3 0 0 1-2.885-2.176L.584 7.295A2.193 2.193 0 0 1 2.693 4.5H4V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm-6.5 0V3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1.5zm5.737 8H4.763a1.5 1.5 0 0 1-1.442-1.088L2.027 6.883A.693.693 0 0 1 2.693 6h10.614a.693.693 0 0 1 .666.883l-1.294 4.53a1.5 1.5 0 0 1-1.442 1.087m-4.59-1.265a.75.75 0 0 1-.882-.588l-.5-2.5a.75.75 0 0 1 1.47-.294l.5 2.5a.75.75 0 0 1-.588.882m4.088-3.088a.75.75 0 1 0-1.47-.294l-.5 2.5a.75.75 0 1 0 1.47.294z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShoppingBasketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShoppingCartIcon],svg[gravity-ui-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.018 3.068L3.395 4.5L4.58 9.005a3 3 0 0 0 4.186 1.948l4.518-2.14A3 3 0 0 0 15 6.102V5a2 2 0 0 0-2-2H4.556l-.15-.535A2 2 0 0 0 2.48 1H.75a.75.75 0 0 0 0 1.5h1.73a.5.5 0 0 1 .482.366zm5.106 6.53l4.518-2.14a1.5 1.5 0 0 0 .858-1.356V5a.5.5 0 0 0-.5-.5H4.946L6.03 8.624a1.5 1.5 0 0 0 2.093.973M12 14.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5M4.75 13a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShoppingCartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiShuffleIcon],svg[gravity-ui-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 12.5a.75.75 0 0 1 0-1.5h2.044c.86 0 1.644-.49 2.021-1.262L6.665 8l-.85-1.738A2.25 2.25 0 0 0 3.794 5H1.75a.75.75 0 1 1 0-1.5h2.044a3.75 3.75 0 0 1 3.369 2.103l.337.69l.337-.69A3.75 3.75 0 0 1 11.206 3.5h1.233l-.97-.97a.75.75 0 0 1 1.061-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-1.234c-.86 0-1.644.49-2.021 1.262l-2.022 4.135A3.75 3.75 0 0 1 3.794 12.5zm6.639-1.542l.696-1.424l.1.204A2.25 2.25 0 0 0 11.206 11h1.233l-.97-.97a.75.75 0 1 1 1.061-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-1.234a3.75 3.75 0 0 1-2.905-1.378q.046-.08.088-.164" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiShuffleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSignalIcon],svg[gravity-ui-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.261 2.186c.337-.274.829-.154 1.044.223c.197.344.09.777-.21 1.035A5.99 5.99 0 0 0 2 8a5.99 5.99 0 0 0 2.095 4.556c.3.258.407.69.21 1.034c-.215.378-.707.498-1.044.223A7.49 7.49 0 0 1 .5 8a7.49 7.49 0 0 1 2.761-5.814m8.434.223c-.197.344-.09.777.21 1.035A5.99 5.99 0 0 1 14 8a5.99 5.99 0 0 1-2.095 4.556c-.3.258-.407.69-.21 1.034c.215.378.707.498 1.044.223A7.49 7.49 0 0 0 15.5 8a7.49 7.49 0 0 0-2.761-5.814c-.337-.274-.829-.154-1.044.223M4.759 4.878c.315-.327.837-.21 1.062.184c.19.33.097.744-.144 1.04A3 3 0 0 0 5 8c0 .72.254 1.381.677 1.898c.241.296.333.71.144 1.04c-.225.394-.747.511-1.062.184A4.5 4.5 0 0 1 3.5 8c0-1.213.48-2.313 1.26-3.122m5.42.184c-.19.33-.098.744.144 1.04C10.746 6.618 11 7.28 11 8s-.254 1.381-.677 1.898c-.242.296-.333.71-.144 1.04c.225.394.747.511 1.062.184A4.5 4.5 0 0 0 12.5 8c0-1.213-.48-2.313-1.26-3.122c-.314-.327-.836-.21-1.061.184M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSignalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSkullIcon],svg[gravity-ui-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.5 12l.614-.246A3 3 0 0 0 15 8.97V8A7 7 0 1 0 1 8v.969a3 3 0 0 0 1.886 2.785L3.5 12l1 3h7zm-2.081 1.5l.658-1.974l.22-.66l.646-.259l.614-.245a1.5 1.5 0 0 0 .943-1.393V8a5.5 5.5 0 1 0-11 0v.969a1.5 1.5 0 0 0 .943 1.393l.614.245l.646.259l.22.66l.658 1.974h.544L6.5 12h1v1.5h1V12h1l.375 1.5zM9 8.4A1.4 1.4 0 0 1 10.4 7h.246a1.353 1.353 0 0 1 .223 2.688l-.515.086A1.163 1.163 0 0 1 9 8.628zM5.353 7a1.353 1.353 0 0 0-.222 2.688l.515.086A1.163 1.163 0 0 0 7 8.628V8.4A1.4 1.4 0 0 0 5.6 7z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSkullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSlidersIcon],svg[gravity-ui-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.405.75a3.001 3.001 0 0 1-5.81 0H1.747a.75.75 0 0 1 0-1.5h1.348a3.001 3.001 0 0 1 5.81 0h5.345a.75.75 0 0 1 0 1.5zm-7.158 4.5h5.345a3.001 3.001 0 0 1 5.811 0h1.347a.75.75 0 1 1 0 1.5h-1.347a3.001 3.001 0 0 1-5.81 0H1.746a.75.75 0 0 1 0-1.5m8.25-.75a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSlidersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSlidersVerticalIcon],svg[gravity-ui-sliders-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.999 8.499a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-.75-1.406a3.001 3.001 0 0 0 0 5.811v1.347a.75.75 0 0 0 1.5 0v-1.347a3.001 3.001 0 0 0 0-5.811V1.748a.75.75 0 0 0-1.5 0zm-4.5 7.158V8.906a3.001 3.001 0 0 0 0-5.81V1.747a.75.75 0 1 0-1.5 0v1.347a3.001 3.001 0 0 0 0 5.811v5.345a.75.75 0 0 0 1.5 0M6.499 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSlidersVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSmartphoneIcon],svg[gravity-ui-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5v-9A1.5 1.5 0 0 1 5.5 2h5A1.5 1.5 0 0 1 12 3.5m-1.5-3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3zM6.25 11a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSmartphoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSnailIcon],svg[gravity-ui-snail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.864 1.107a.75.75 0 1 1 .768 1.29a2 2 0 0 0-.397.414c-.205.287-.432.748-.477 1.44a2.11 2.11 0 0 1 .388 2.78l-.028.043a2.28 2.28 0 0 0-.266 1.982l.471 1.414A3.44 3.44 0 0 1 11.06 15H2.332A1.333 1.333 0 0 1 1 13.667c0-1.223.822-2.253 1.944-2.568C2.344 10.27 2 9.15 2 8c0-1.412.458-2.674 1.349-3.587C4.243 3.498 5.509 3 7 3c1.522 0 2.643.802 3.246 1.93q.159-.254.37-.46a3.46 3.46 0 0 1-.36-2a3.3 3.3 0 0 1 .293-.999l.036-.069l.013-.023l.005-.008l.002-.004l.001-.001v-.002a.75.75 0 1 1 1.285.778q-.015.028-.044.099c-.036.094-.08.236-.103.415a1.96 1.96 0 0 0 .208 1.131q.173-.029.351-.034a4.1 4.1 0 0 1 .712-1.814a3.5 3.5 0 0 1 .548-.607a3 3 0 0 1 .263-.201l.022-.015l.01-.005l.003-.002l.002-.001zM7.75 10.75c.877 0 1.57-.38 2.06-.94a5.2 5.2 0 0 0 1.165-2.169L11.401 6a1 1 0 0 1 1.09-.74a.6.6 0 0 1 .509.595a.63.63 0 0 1-.102.344l-.028.043a3.78 3.78 0 0 0-.44 3.289l.47 1.413a1.94 1.94 0 0 1-1.84 2.556H2.512c.08-.565.567-1 1.155-1h.678a.905.905 0 0 0 .436-1.7C4.131 10.438 3.5 9.374 3.5 8c0-1.088.348-1.95.922-2.538C4.993 4.877 5.852 4.5 7 4.5c1.346 0 2.25 1.056 2.25 2.5c0 .639-.162 1.235-.437 1.646c-.26.39-.604.604-1.063.604c-.87 0-1.25-.568-1.25-1c0-.551.38-.75.5-.75A.75.75 0 0 0 7 6C5.89 6 5 7.04 5 8.25c0 1.329 1.12 2.5 2.75 2.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSnailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSnowflakeIcon],svg[gravity-ui-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.719 1.22a.75.75 0 0 1 1.06 0L8 2.44l1.22-1.22a.75.75 0 1 1 1.06 1.06L8.75 3.81V6.7l2.502-1.445l.56-2.091a.75.75 0 1 1 1.45.388l-.447 1.667l1.667.447a.75.75 0 1 1-.388 1.449l-2.092-.56L9.5 7.998l2.502 1.445l2.092-.56a.75.75 0 0 1 .388 1.448l-1.667.447l.447 1.667a.75.75 0 1 1-1.45.388l-.56-2.091L8.75 9.298v2.891l1.53 1.53a.75.75 0 0 1-1.062 1.06L8 13.561l-1.218 1.218a.75.75 0 1 1-1.061-1.06l1.529-1.53V9.3l-2.504 1.445l-.56 2.089a.75.75 0 1 1-1.449-.389l.446-1.664l-1.664-.446a.75.75 0 0 1 .388-1.449l2.09.56L6.5 7.999L3.996 6.553l-2.089.56a.75.75 0 1 1-.388-1.449l1.664-.446l-.445-1.664a.75.75 0 0 1 1.448-.388l.56 2.088L7.25 6.7V3.81L5.719 2.28a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSnowflakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSphereIcon],svg[gravity-ui-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8 4a.75.75 0 0 0 0 1.5A2.5 2.5 0 0 1 10.5 8A.75.75 0 1 0 12 8a4 4 0 0 0-4-4" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSphereIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareIcon],svg[gravity-ui-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareArticleIcon],svg[gravity-ui-square-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm6 6H5.43a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.07a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-5.32-3h3.57a.75.75 0 0 1 0 1.5H5.18a.75.75 0 0 1 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareArticleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareBarsIcon],svg[gravity-ui-square-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm3.75 5.498a.75.75 0 0 0 0 1.5h5.502a.75.75 0 0 0 0-1.5zM4.5 8a.75.75 0 0 1 .75-.75h5.502a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 8m.75-3.498a.75.75 0 0 0 0 1.5h5.502a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareBarsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareBarsVerticalIcon],svg[gravity-ui-square-bars-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm8.5 6.251a.75.75 0 1 0 1.5 0V5.249a.75.75 0 0 0-1.5 0zm-2 .75a.75.75 0 0 1-.75-.75V5.249a.75.75 0 0 1 1.5 0v5.502a.75.75 0 0 1-.75.75m-3.497-.75a.75.75 0 0 0 1.5 0V5.249a.75.75 0 1 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareBarsVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareBracketsIcon],svg[gravity-ui-square-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 1A2.25 2.25 0 0 0 1.5 3.25v9.5A2.25 2.25 0 0 0 3.75 15h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 0 0-1.5zm8.5 14a2.25 2.25 0 0 0 2.25-2.25v-9.5A2.25 2.25 0 0 0 12.25 1h-.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareBracketsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareBracketsBarsVerticalIcon],svg[gravity-ui-square-brackets-bars-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.25a.75.75 0 0 1 .75-.75h1.01a.75.75 0 0 0 0-1.5H3.25A2.25 2.25 0 0 0 1 4.25v7.5A2.25 2.25 0 0 0 3.25 14h1.01a.75.75 0 0 0 0-1.5H3.25a.75.75 0 0 1-.75-.75zM11.74 2a.75.75 0 0 0 0 1.5h1.01a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-1.01a.75.75 0 0 0 0 1.5h1.01A2.25 2.25 0 0 0 15 11.75v-7.5A2.25 2.25 0 0 0 12.75 2zM8.75 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm2-.75a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75M6 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareBracketsBarsVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareBracketsLetterAIcon],svg[gravity-ui-square-brackets-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 3.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h1.01a.75.75 0 0 1 0 1.5H3.25A2.25 2.25 0 0 1 1 11.75v-7.5A2.25 2.25 0 0 1 3.25 2h1.01a.75.75 0 0 1 0 1.5zm7.74-.75a.75.75 0 0 1 .75-.75h1.01A2.25 2.25 0 0 1 15 4.25v7.5A2.25 2.25 0 0 1 12.75 14h-1.01a.75.75 0 0 1 0-1.5h1.01a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-1.01a.75.75 0 0 1-.75-.75m-4.2 2.588a1.291 1.291 0 0 1 2.418 0l1.743 4.649a.75.75 0 1 1-1.404.526L9.168 9.5H6.832l-.38 1.013a.75.75 0 1 1-1.404-.526zM7.395 8h1.21L8 6.386z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareBracketsLetterAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareChartBarIcon],svg[gravity-ui-square-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm3.75 5.498a.75.75 0 0 0 0 1.5h2.002a.75.75 0 0 0 0-1.5zM4.5 8a.75.75 0 0 1 .75-.75h5.502a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 8m.75-3.498a.75.75 0 0 0 0 1.5h3.502a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareChartBarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareChartColumnIcon],svg[gravity-ui-square-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm8.499 6.251a.75.75 0 0 0 1.5 0V8.749a.75.75 0 0 0-1.5 0zm-1.998.75a.75.75 0 0 1-.75-.75V5.249a.75.75 0 1 1 1.5 0v5.502a.75.75 0 0 1-.75.75m-3.498-.75a.75.75 0 0 0 1.5 0V7.249a.75.75 0 1 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareChartColumnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareCheckIcon],svg[gravity-ui-square-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm10.092 1.46a.75.75 0 0 0-1.184-.92L7.43 8.869l-1.4-1.4A.75.75 0 0 0 4.97 8.53l2 2a.75.75 0 0 0 1.122-.07z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareDashedIcon],svg[gravity-ui-square-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v1.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h1.75a.75.75 0 0 1 0 1.5zM9 2.25a.75.75 0 0 1 .75-.75h1.75a3 3 0 0 1 3 3v1.75a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 11.5 3H9.75A.75.75 0 0 1 9 2.25M2.25 9a.75.75 0 0 1 .75.75v1.75A1.5 1.5 0 0 0 4.5 13h1.75a.75.75 0 0 1 0 1.5H4.5a3 3 0 0 1-3-3V9.75A.75.75 0 0 1 2.25 9m11.5 0a.75.75 0 0 1 .75.75v1.75a3 3 0 0 1-3 3H9.75a.75.75 0 0 1 0-1.5h1.75a1.5 1.5 0 0 0 1.5-1.5V9.75a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareDashedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareDashedCircleIcon],svg[gravity-ui-square-dashed-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h1.75a.75.75 0 0 0 0-1.5H4.5a3 3 0 0 0-3 3v1.75a.75.75 0 0 0 1.5 0zm6.75-3a.75.75 0 0 0 0 1.5h1.75A1.5 1.5 0 0 1 13 4.5v1.75a.75.75 0 0 0 1.5 0V4.5a3 3 0 0 0-3-3zM3 9.75a.75.75 0 0 0-1.5 0v1.75a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H4.5A1.5 1.5 0 0 1 3 11.5zm11.5 0a.75.75 0 0 0-1.5 0v1.75a1.5 1.5 0 0 1-1.5 1.5H9.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3zM10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareDashedCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareDashedLetterAIcon],svg[gravity-ui-square-dashed-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v1.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h1.75a.75.75 0 0 1 0 1.5zM9 2.25a.75.75 0 0 1 .75-.75h1.75a3 3 0 0 1 3 3v1.75a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 11.5 3H9.75A.75.75 0 0 1 9 2.25M2.25 9a.75.75 0 0 1 .75.75v1.75A1.5 1.5 0 0 0 4.5 13h1.75a.75.75 0 0 1 0 1.5H4.5a3 3 0 0 1-3-3V9.75A.75.75 0 0 1 2.25 9m11.5 0a.75.75 0 0 1 .75.75v1.75a3 3 0 0 1-3 3H9.75a.75.75 0 0 1 0-1.5h1.75a1.5 1.5 0 0 0 1.5-1.5V9.75a.75.75 0 0 1 .75-.75M6.791 5.338a1.291 1.291 0 0 1 2.418 0l1.743 4.649a.75.75 0 1 1-1.404.526L9.168 9.5H6.832l-.38 1.013a.75.75 0 1 1-1.404-.526zM7.395 8h1.21L8 6.386z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareDashedLetterAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareDashedLetterTIcon],svg[gravity-ui-square-dashed-letter-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h1.75a.75.75 0 0 0 0-1.5H4.5a3 3 0 0 0-3 3v1.75a.75.75 0 0 0 1.5 0zm6.75-3a.75.75 0 0 0 0 1.5h1.75A1.5 1.5 0 0 1 13 4.5v1.75a.75.75 0 0 0 1.5 0V4.5a3 3 0 0 0-3-3zM3 9.75a.75.75 0 0 0-1.5 0v1.75a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H4.5A1.5 1.5 0 0 1 3 11.5zm11.5 0a.75.75 0 0 0-1.5 0v1.75a1.5 1.5 0 0 1-1.5 1.5H9.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3zM5.752 5.002a.75.75 0 1 0 0 1.5h1.5l-.002 3.75a.75.75 0 1 0 1.5 0l.002-3.75h1.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareDashedLetterTIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareDashedTextIcon],svg[gravity-ui-square-dashed-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h1.75a.75.75 0 0 0 0-1.5H4.5a3 3 0 0 0-3 3v1.75a.75.75 0 0 0 1.5 0zm6.75-3a.75.75 0 0 0 0 1.5h1.75A1.5 1.5 0 0 1 13 4.5v1.75a.75.75 0 0 0 1.5 0V4.5a3 3 0 0 0-3-3zM3 9.75a.75.75 0 0 0-1.5 0v1.75a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H4.5A1.5 1.5 0 0 1 3 11.5zm11.5 0a.75.75 0 0 0-1.5 0v1.75a1.5 1.5 0 0 1-1.5 1.5H9.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3zM5.752 4.502a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareDashedTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareDotIcon],svg[gravity-ui-square-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 1.5a.75.75 0 0 1 0 1.5H4.5A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V7.75a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3zm4.25 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareDotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareExclamationIcon],svg[gravity-ui-square-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm4.5 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareFillIcon],svg[gravity-ui-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareHashtagIcon],svg[gravity-ui-square-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm5.623 2.76a.75.75 0 0 1 .617.863l-.105.627h.865a.75.75 0 0 1 0 1.5h-1.115l-.25 1.5H11a.75.75 0 0 1 0 1.5H9.885l-.145.873a.75.75 0 1 1-1.48-.246l.105-.627h-1.48l-.145.873a.75.75 0 1 1-1.48-.246l.105-.627H4.5a.75.75 0 0 1 0-1.5h1.115l.25-1.5H5a.75.75 0 0 1 0-1.5h1.115l.145-.873a.75.75 0 1 1 1.48.246l-.105.627h1.48l.145-.873a.75.75 0 0 1 .863-.617M7.135 8.75h1.48l.25-1.5h-1.48z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareHashtagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareLetterPIcon],svg[gravity-ui-square-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm5.25 0a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V9.5h.75a2.5 2.5 0 0 0 0-5zM8.25 8H7.5V6h.75a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareLetterPIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareLetterTIcon],svg[gravity-ui-square-letter-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm4.5.25a.75.75 0 0 0 0 1.5h1.25v4.25a.75.75 0 0 0 1.5 0V6.25H10a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareLetterTIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareLineHorizontalIcon],svg[gravity-ui-square-line-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiSquareLineHorizontal0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M.75 7.25a.75.75 0 0 0 0 1.5h.75v2.75a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.75h.75a.75.75 0 0 0 0-1.5h-.75V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v2.75zM3 8.75v2.75A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8.75zm10-1.5H3V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiSquareLineHorizontal0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiSquareLineHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareLineVerticalIcon],svg[gravity-ui-square-line-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75.75a.75.75 0 0 0-1.5 0v.75H4.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h2.75v.75a.75.75 0 0 0 1.5 0v-.75h2.75a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3H8.75zM7.25 3H4.5A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h2.75zm1.5 10V3h2.75A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareLineVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareListUlIcon],svg[gravity-ui-square-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm4.75.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 0A.75.75 0 0 1 8 4.5h2.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M5.25 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 1.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 7.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5zm-.75 3.5A.75.75 0 0 1 8 10h2.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareListUlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareMinusIcon],svg[gravity-ui-square-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm4 2.75a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquarePlusIcon],svg[gravity-ui-square-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm7.25 1a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquarePlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareXmarkIcon],svg[gravity-ui-square-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm5.03.97a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStarIcon],svg[gravity-ui-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.194 5l.351.873l.94.064l3.197.217l-2.46 2.055l-.722.603l.23.914l.782 3.108l-2.714-1.704L8 10.629l-.798.5l-2.714 1.705l.782-3.108l.23-.914l-.723-.603l-2.46-2.055l3.198-.217l.94-.064l.35-.874L8 2.025zm-7.723-.292l3.943-.268L6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStarFillIcon],svg[gravity-ui-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z"></svg:path>`,
})
export class GravityUiStarFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStethoscopeIcon],svg[gravity-ui-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.513 2.452a.75.75 0 0 0-.526-1.404l-1.027.385A2.25 2.25 0 0 0 .5 3.539V6a4.75 4.75 0 0 0 4.274 4.727a4.75 4.75 0 0 0 9.476-.477v-.364a2.501 2.501 0 1 0-1.5 0v.364a3.25 3.25 0 0 1-6.477.39A4.75 4.75 0 0 0 10 6V3.54a2.25 2.25 0 0 0-1.46-2.107l-1.027-.385a.75.75 0 1 0-.526 1.404l1.026.385a.75.75 0 0 1 .487.702V6A3.25 3.25 0 1 1 2 6V3.54a.75.75 0 0 1 .487-.703zM13.5 8.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStethoscopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStickerIcon],svg[gravity-ui-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h3v-2.5a3 3 0 0 1 3-3H13v-3A1.5 1.5 0 0 0 11.5 3m1.303 6a1.5 1.5 0 0 1-.242.318l-3.243 3.243a1.5 1.5 0 0 1-.318.242V10.5A1.5 1.5 0 0 1 10.5 9zm.818 1.379a3 3 0 0 0 .879-2.122V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h3.757a3 3 0 0 0 2.122-.879z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStickerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStopIcon],svg[gravity-ui-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStopFillIcon],svg[gravity-ui-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStopFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStopwatchIcon],svg[gravity-ui-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM13 9A5 5 0 1 1 3 9a5 5 0 0 1 10 0m1.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2.28-7.28a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06M8.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .3.6l1.333 1a.75.75 0 1 0 .9-1.2L8.75 8.625z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStopwatchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiStrikethroughIcon],svg[gravity-ui-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.502 2.757C6.214 2.236 7.122 2 7.984 2c1.685 0 3.015.572 3.687 1.915a.75.75 0 1 1-1.342.67C10.001 3.93 9.331 3.5 7.984 3.5c-.611 0-1.19.17-1.597.468c-.384.28-.627.678-.627 1.242c0 .403.165.758.463 1.04H4.447a2.9 2.9 0 0 1-.187-1.04c0-1.084.507-1.916 1.242-2.453m6.047 5.993h1.201a.75.75 0 0 0 0-1.5h-9.5a.75.75 0 0 0 0 1.5h5.475l.043.012h.002c1.196.323 1.98 1.005 1.98 1.988c0 .669-.289 1.063-.742 1.33c-.5.296-1.222.437-2 .437c-1.398 0-2.453-.472-2.796-1.504a.75.75 0 1 0-1.424.474c.657 1.969 2.602 2.53 4.22 2.53c.915 0 1.94-.16 2.762-.644c.869-.512 1.48-1.376 1.48-2.623c0-.822-.276-1.481-.7-2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStrikethroughIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSuitcaseIcon],svg[gravity-ui-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.5H7a.5.5 0 0 0-.5.5v1h3V2a.5.5 0 0 0-.5-.5M5 2v1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m4.5 2.5H11A1.5 1.5 0 0 1 12.5 6v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V6A1.5 1.5 0 0 1 5 4.5zM5.75 6a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSuitcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiSunIcon],svg[gravity-ui-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a.75.75 0 0 1-.75-.75V.75a.75.75 0 0 1 1.5 0v1.5A.75.75 0 0 1 8 3m0 7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-.75 3.25a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM13 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 13 8M.75 7.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm10.786-2.786a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0m-9.193 8.132a.75.75 0 0 0 1.06 1.06l1.062-1.06a.75.75 0 0 0-1.061-1.06zm9.193-1.06a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06M3.404 2.343a.75.75 0 0 0-1.06 1.06l1.06 1.061a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSunIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTShirtIcon],svg[gravity-ui-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.177 3.089l-3.544-1.772A3 3 0 0 0 10.292 1h-.877a1.5 1.5 0 0 1-2.83 0h-.877a3 3 0 0 0-1.341.317L.823 3.088a1 1 0 0 0-.481 1.266l1.295 3.237a1 1 0 0 0 1.28.565l.351-.132l-.188 4.9A2 2 0 0 0 5.078 15h5.844a2 2 0 0 0 1.998-2.077l-.188-4.899l.352.132a1 1 0 0 0 1.28-.565l1.294-3.237a1 1 0 0 0-.481-1.266M5.764 2.5h-.056a1.5 1.5 0 0 0-.67.158L1.904 4.224l.943 2.356l2.006-.752l-.275 7.153a.5.5 0 0 0 .5.519h5.843a.5.5 0 0 0 .5-.52l-.276-7.152l2.006.752l.943-2.356l-3.132-1.566a1.5 1.5 0 0 0-.671-.158h-.056A3 3 0 0 1 8 3.5a3 3 0 0 1-2.236-1" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTShirtIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTagIcon],svg[gravity-ui-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.06 8.818l-4.869 4.87a1 1 0 0 1-1.408.006l-4.45-4.37a1 1 0 0 1-.012-1.414l4.868-4.96a1.5 1.5 0 0 1 1.07-.45H12.5a1 1 0 0 1 1 1v4.257a1.5 1.5 0 0 1-.44 1.061m-6.942-6.92A3 3 0 0 1 8.259 1H12.5A2.5 2.5 0 0 1 15 3.5v4.257a3 3 0 0 1-.879 2.122l-4.87 4.87a2.5 2.5 0 0 1-3.519.015l-4.45-4.37a2.5 2.5 0 0 1-.032-3.535zM10.5 6.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTagDollarIcon],svg[gravity-ui-tag-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.182 2.94l-4.87 4.869a1 1 0 0 0-.006 1.408l4.37 4.45a1 1 0 0 0 1.414.012l4.96-4.868a1.5 1.5 0 0 0 .45-1.07V3.5a1 1 0 0 0-1-1H8.243a1.5 1.5 0 0 0-1.061.44m6.92 6.942A3 3 0 0 0 15 7.741V3.5A2.5 2.5 0 0 0 12.5 1H8.243a3 3 0 0 0-2.122.879l-4.87 4.87a2.5 2.5 0 0 0-.015 3.519l4.37 4.45a2.5 2.5 0 0 0 3.535.032zm-3.72-5.324a2.5 2.5 0 0 0-1.045-.38a1.95 1.95 0 0 0-1.616.57c-.54.54-.56 1.23-.437 1.767c.119.526.394 1.029.637 1.41c.254.4.46.732.549 1.033c.073.249.036.352-.072.46c-.072.072-.182.124-.417.066c-.253-.064-.569-.247-.855-.533a1.77 1.77 0 0 1-.469-.879c-.069-.329-.023-.57.034-.68a.75.75 0 1 0-1.33-.693c-.263.506-.289 1.125-.172 1.682c.07.332.196.67.382.988l-.253.252a.75.75 0 0 0 1.06 1.061l.222-.221a3.1 3.1 0 0 0 1.018.478c.6.15 1.301.079 1.84-.46c.612-.612.626-1.346.451-1.943c-.153-.522-.472-1.022-.694-1.37l-.029-.046c-.213-.334-.378-.664-.44-.937c-.06-.261-.002-.337.036-.374a.45.45 0 0 1 .392-.14c.172.02.445.126.777.457c.33.33.447.6.482.79a.83.83 0 0 1-.067.513a.75.75 0 1 0 1.362.627c.18-.392.281-.879.179-1.42a2.7 2.7 0 0 0-.446-1.036l.221-.221a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTagDollarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTagRubleIcon],svg[gravity-ui-tag-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.182 2.94l-4.87 4.869a1 1 0 0 0-.006 1.408l4.37 4.45a1 1 0 0 0 1.414.012l4.96-4.868a1.5 1.5 0 0 0 .45-1.07V3.5a1 1 0 0 0-1-1H8.243a1.5 1.5 0 0 0-1.061.44m6.92 6.942A3 3 0 0 0 15 7.741V3.5A2.5 2.5 0 0 0 12.5 1H8.243a3 3 0 0 0-2.122.879l-4.87 4.87a2.5 2.5 0 0 0-.015 3.519l4.37 4.45a2.5 2.5 0 0 0 3.535.032zm-3.908-5.844a.75.75 0 0 0-1.06 0L7.366 5.805l-.088-.088a.75.75 0 0 0-1.06 1.06l.087.09l-.353.353l-.088-.089a.75.75 0 0 0-1.061 1.061l.088.088l-.353.354a.75.75 0 0 0 1.06 1.06l.354-.353l1.06 1.06a.75.75 0 1 0 1.061-1.06l-1.06-1.06l.353-.354l.796.795a2.375 2.375 0 0 0 3.358-3.358zm-.972 3.624l-.795-.796L9.664 5.63l.796.795a.875.875 0 0 1-1.238 1.238" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTagRubleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTagsIcon],svg[gravity-ui-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.884 6.995l-4.12 4.12a.75.75 0 0 1-1.055.005L1.906 7.395a.75.75 0 0 1-.011-1.06l4.118-4.21a1.25 1.25 0 0 1 .894-.375H10.5a.75.75 0 0 1 .75.75v3.61c0 .332-.132.65-.366.885M4.94 1.077A2.75 2.75 0 0 1 6.907.25H10.5a2.25 2.25 0 0 1 2.25 2.25v.75h.75a2.25 2.25 0 0 1 2.25 2.25v3.61c0 .73-.29 1.43-.806 1.946l-4.12 4.12a2.25 2.25 0 0 1-3.165.016l-3.803-3.726a2.3 2.3 0 0 1-.286-.341L.856 8.466a2.25 2.25 0 0 1-.033-3.18zm2.242 11.548a2.3 2.3 0 0 0 .642-.45L11.52 8.48q.11.021.229.021a1.25 1.25 0 0 0 .976-2.03q.024-.178.024-.36V4.75h.75a.75.75 0 0 1 .75.75v3.61c0 .332-.132.65-.366.885l-4.12 4.12a.75.75 0 0 1-1.055.005zM8.75 5.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTagsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTargetIcon],svg[gravity-ui-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-4.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTargetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTargetDartIcon],svg[gravity-ui-target-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTargetDartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTerminalIcon],svg[gravity-ui-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 12 3.5M4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm.47 8.53a.75.75 0 0 1 0-1.06L5.94 8L4.47 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0M8.75 9.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTerminalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTerminalLineIcon],svg[gravity-ui-terminal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.22 11.22a.75.75 0 1 0 1.06 1.06l3.75-3.75a.75.75 0 0 0 0-1.06L2.28 3.72a.75.75 0 0 0-1.06 1.06L4.44 8zm13.03 1.28a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTerminalLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextIcon],svg[gravity-ui-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.279 2.544A.75.75 0 0 1 4 2h8a.75.75 0 0 1 .721.544l.5 1.75a.75.75 0 1 1-1.442.412L11.434 3.5H8.75l-.004 9H9.5a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.746l.004-9H4.566L4.22 4.706a.75.75 0 1 1-1.442-.412z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextAlignCenterIcon],svg[gravity-ui-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 2a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm2 3.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM4 6.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 6.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextAlignCenterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextAlignJustifyIcon],svg[gravity-ui-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 2a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25M2.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextAlignJustifyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextAlignLeftIcon],svg[gravity-ui-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 2a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM2 6.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextAlignRightIcon],svg[gravity-ui-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 2a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM6 6.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 6.25M2.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm4 3.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextIndentIcon],svg[gravity-ui-text-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 2H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5m0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5m0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5m-10.5 3.5h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5m.49-7a.74.74 0 0 1 .463.162l1.906 1.526a1.04 1.04 0 0 1 0 1.624l-1.906 1.526A.74.74 0 0 1 2.5 9.76V6.24a.74.74 0 0 1 .74-.74" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextIndentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextOutdentIcon],svg[gravity-ui-text-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 2H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5m0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5m0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5m-10.5 3.5h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5m2.01-7a.74.74 0 0 0-.463.162L2.39 7.188a1.04 1.04 0 0 0 0 1.624l1.907 1.526A.74.74 0 0 0 5.5 9.76V6.24a.74.74 0 0 0-.74-.74" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextOutdentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiThumbsDownIcon],svg[gravity-ui-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 9l-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163l.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2zM6.229 2.89l3.863.455l.379 5.3l-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663l.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814m7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiThumbsDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiThumbsDownFillIcon],svg[gravity-ui-thumbs-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.9 14.315a1.38 1.38 0 0 1-2.542-.984L7.07 10H3.13a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7zm4.352-5.762a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiThumbsDownFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiThumbsUpIcon],svg[gravity-ui-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4 7l2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5L9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14zm5.771 6.11l-3.863-.455l-.379-5.3l2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814M2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiThumbsUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiThumbsUp2Icon],svg[gravity-ui-thumbs-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiThumbsUp20)"><svg:path fill="currentColor" fill-rule="evenodd" d="m13.345 2.978l-.135.609l-.33 1.5h1.158q.19 0 .37.033a2 2 0 0 1 1.593 2.352l-.26 1.321a4 4 0 0 1-4.322 3.21a4 4 0 0 1-4.286 2.767l-3.984-.473l-.48-6.352l2.813-4.564a1.854 1.854 0 0 1 3.427.826l1.452-2.418a1.627 1.627 0 0 1 2.984 1.189m-4.38 4.06l.215-.37l2.467-4.106a.127.127 0 0 1 .233.092l-.465 2.11l-.403 1.823h3.027a.5.5 0 0 1 .49.596l-.26 1.321a2.5 2.5 0 0 1-2.528 2.018l.219-1.09A2 2 0 0 0 10 7.037H8.964M4.55 12.952l2.759.328a2.5 2.5 0 0 0 2.745-1.99l.434-2.155a.5.5 0 0 0-.49-.599H6.476l.414-1.83l.515-2.275a.354.354 0 0 0-.646-.264L4.2 8.318zM.695 7.651a.75.75 0 0 1 .804.691l.478 6.353a.75.75 0 0 1-1.495.112L.004 8.455a.75.75 0 0 1 .691-.804" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiThumbsUp20"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiThumbsUp2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiThumbsUpFillIcon],svg[gravity-ui-thumbs-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.1 1.685a1.38 1.38 0 0 1 2.542.984L8.93 6h3.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14L4 7zM2.749 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiThumbsUpFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiThunderboltIcon],svg[gravity-ui-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.836 6l.76-2.027L9.336 2H5.5a.72.72 0 0 0-.664.45L2.513 8.257a.177.177 0 0 0 .164.243h4.965l-.732 2.013l-1.082 2.975a.382.382 0 0 0 .637.392l6.956-7.391A.29.29 0 0 0 13.21 6H7.835m2.727-3l.235-.627A1.386 1.386 0 0 0 9.5.5h-4c-.906 0-1.72.552-2.057 1.393L1.12 7.7A1.677 1.677 0 0 0 2.677 10H5.5l-.545 1.5l-.537 1.475a1.882 1.882 0 0 0 3.14 1.933l6.956-7.391A1.79 1.79 0 0 0 13.21 4.5H10z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiThunderboltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiThunderboltFillIcon],svg[gravity-ui-thunderbolt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.61 6.914l-7.632 8.08a1.614 1.614 0 0 1-2.69-1.66L5.5 10H2.677A1.677 1.677 0 0 1 1.12 7.7l2.323-5.807A2.22 2.22 0 0 1 5.5.5h4c.968 0 1.637.967 1.298 1.873L10 4.5h3.569a1.431 1.431 0 0 1 1.04 2.414"></svg:path>`,
})
export class GravityUiThunderboltFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTicketIcon],svg[gravity-ui-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiTicket0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.091 2.318a.986.986 0 0 1 .106 1.485L11 4a.707.707 0 0 0 1 1l.197-.197a1 1 0 0 1 .288-.2a.986.986 0 0 1 1.197.306l1.243 1.658c.575.766.36 1.862-.461 2.355a16.16 16.16 0 0 0-5.542 5.542a1.616 1.616 0 0 1-2.355.461l-1.658-1.243a.986.986 0 0 1-.106-1.485L5 12a.707.707 0 0 0-1-1l-.197.197a1 1 0 0 1-.288.2a.986.986 0 0 1-1.197-.306L1.075 9.433a1.616 1.616 0 0 1 .461-2.355a16.16 16.16 0 0 0 5.542-5.542a1.616 1.616 0 0 1 2.355-.461zm-2.558-.043l1.201.9a2.208 2.208 0 0 0 3.09 3.09l.901 1.202a.116.116 0 0 1-.033.169a17.66 17.66 0 0 0-6.056 6.056a.116.116 0 0 1-.17.033l-1.2-.9a2.208 2.208 0 0 0-3.09-3.09l-.901-1.202a.116.116 0 0 1 .033-.168a17.66 17.66 0 0 0 6.057-6.057a.116.116 0 0 1 .168-.033M7.53 6.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiTicket0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiTicketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTimelineIcon],svg[gravity-ui-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 1.25v13.5a.75.75 0 0 0 1.5 0V1.25a.75.75 0 0 0-1.5 0M2.5 2H6v1.5H2.5a1 1 0 0 0-1 1v1.75a1 1 0 0 0 1 1H6v1.5h-.5a1 1 0 0 0-1 1v1.75a1 1 0 0 0 1 1H6V14h-.5A2.5 2.5 0 0 1 3 11.5V9.75c0-.356.074-.694.208-1H2.5A2.5 2.5 0 0 1 0 6.25V4.5A2.5 2.5 0 0 1 2.5 2m8 5.25H10v1.5h3.5a1 1 0 0 1 1 1v1.75a1 1 0 0 1-1 1H10V14h3.5a2.5 2.5 0 0 0 2.5-2.5V9.75a2.5 2.5 0 0 0-2.5-2.5h-.708c.134-.306.208-.644.208-1V4.5A2.5 2.5 0 0 0 10.5 2H10v1.5h.5a1 1 0 0 1 1 1v1.75a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTimelineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTimestampsIcon],svg[gravity-ui-timestamps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 12.75a2.75 2.75 0 0 0-2-2.646V8.75h2.25a.75.75 0 0 0 0-1.5h-6V5.896a2.75 2.75 0 0 0 2-2.646a2.75 2.75 0 1 0-3.5 2.646V7.25h-6a.75.75 0 0 0 0 1.5H3.5v1.354a2.75 2.75 0 0 0-2 2.646A2.75 2.75 0 1 0 5 10.104V8.75h6v1.354a2.751 2.751 0 1 0 3.5 2.646M11.75 14a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M8 4.5A1.25 1.25 0 1 0 8 2a1.25 1.25 0 0 0 0 2.5M4.25 14a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTimestampsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiToggleOffIcon],svg[gravity-ui-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m3.775 0A5.5 5.5 0 0 0 11 8a5.5 5.5 0 0 0-1.725-4H10.5a4 4 0 0 1 0 8zM0 8a5.5 5.5 0 0 1 5.5-5.5h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 0 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiToggleOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiToggleOnIcon],svg[gravity-ui-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 8a5.5 5.5 0 0 1 5.5-5.5h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 0 8m6.5 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiToggleOnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTrafficLightIcon],svg[gravity-ui-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 12.5v-9A1.5 1.5 0 0 1 6 2h4a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 10 14H6a1.5 1.5 0 0 1-1.5-1.5m10.374-7.834L13 7.477v.773h1.25a.75.75 0 0 1 .624 1.166L13 12.227v.273a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-.273L1.126 9.416A.75.75 0 0 1 1.75 8.25H3v-.773L1.126 4.666A.75.75 0 0 1 1.75 3.5H3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3h1.25a.75.75 0 0 1 .624 1.166M8 7.25a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m0 5a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTrafficLightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTrapezoidLeftLineHorizontalIcon],svg[gravity-ui-trapezoid-left-line-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiTrapezoidLeftLineHorizontal0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M.75 7.25a.75.75 0 0 0 0 1.5H2v2.234a2.5 2.5 0 0 0 1.97 2.443l7 1.517A2.5 2.5 0 0 0 14 12.5V8.75h1.25a.75.75 0 0 0 0-1.5H14V3.5a2.5 2.5 0 0 0-3.03-2.444l-7 1.517A2.5 2.5 0 0 0 2 5.016V7.25zm2.75 1.5v2.234a1 1 0 0 0 .788.977l7 1.517A1 1 0 0 0 12.5 12.5V8.75zm9-1.5h-9V5.016a1 1 0 0 1 .788-.977l7-1.517A1 1 0 0 1 12.5 3.5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiTrapezoidLeftLineHorizontal0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiTrapezoidLeftLineHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTrapezoidUpLineVerticalIcon],svg[gravity-ui-trapezoid-up-line-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.306 4.13a1.75 1.75 0 0 1 1.71-1.38h5.968a1.75 1.75 0 0 1 1.71 1.38l1.516 7a1.75 1.75 0 0 1-1.71 2.12h-9a1.75 1.75 0 0 1-1.71-2.12zM8 .75v14.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.75.75a.75.75 0 0 0-1.5 0V2H5.016a2.5 2.5 0 0 0-2.443 1.97l-1.517 7A2.5 2.5 0 0 0 3.5 14h3.75v1.25a.75.75 0 0 0 1.5 0V14h3.75a2.5 2.5 0 0 0 2.444-3.03l-1.517-7A2.5 2.5 0 0 0 10.984 2H8.75zM7.25 3.5H5.016a1 1 0 0 0-.977.788l-1.517 7A1 1 0 0 0 3.5 12.5h3.75zm1.5 9v-9h2.233a1 1 0 0 1 .978.788l1.516 7A1 1 0 0 1 12.5 12.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GravityUiTrapezoidUpLineVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTrashBinIcon],svg[gravity-ui-trash-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTrashBinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTrayIcon],svg[gravity-ui-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8.5h-2.388a3.422 3.422 0 0 1-6.224 0H2.5V11A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5zm-2.204-4.757L13.251 7H10l-.136.545a1.921 1.921 0 0 1-3.728 0L6 7H2.75l1.954-3.257a.5.5 0 0 1 .428-.243h5.736a.5.5 0 0 1 .428.243M15 8.5v-.67a3 3 0 0 0-.428-1.543l-1.99-3.316A2 2 0 0 0 10.869 2H5.132a2 2 0 0 0-1.715.971l-1.99 3.316A3 3 0 0 0 1 7.831V11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTrayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleDownIcon],svg[gravity-ui-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.134 13.005L2.217 4.5A1 1 0 0 1 3.083 3h9.834a1 1 0 0 1 .866 1.5l-4.917 8.505a1 1 0 0 1-1.732 0m3.03.751c-.962 1.665-3.366 1.665-4.329 0L.918 5.251C-.045 3.584 1.158 1.5 3.083 1.5h9.834c1.925 0 3.128 2.084 2.164 3.751z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleDownFillIcon],svg[gravity-ui-triangle-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.164 13.756c-.962 1.665-3.366 1.665-4.329 0L.918 5.251C-.045 3.584 1.158 1.5 3.083 1.5h9.834c1.925 0 3.128 2.084 2.164 3.751z"></svg:path>`,
})
export class GravityUiTriangleDownFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleExclamationIcon],svg[gravity-ui-triangle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.134 2.994L2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleExclamationFillIcon],svg[gravity-ui-triangle-exclamation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.835 2.244c.963-1.665 3.367-1.665 4.33 0l4.916 8.505c.964 1.666-.24 3.751-2.164 3.751H3.083c-1.925 0-3.128-2.085-2.165-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleExclamationFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleLeftIcon],svg[gravity-ui-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.995 7.134L11.5 2.217a1 1 0 0 1 1.5.866v9.834a1 1 0 0 1-1.5.866L2.995 8.866a1 1 0 0 1 0-1.732m-.751 3.03c-1.665-.962-1.665-3.366 0-4.329L10.749.918c1.666-.963 3.751.24 3.751 2.165v9.834c0 1.925-2.085 3.128-3.751 2.164z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleLeftFillIcon],svg[gravity-ui-triangle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.244 10.164c-1.665-.962-1.665-3.366 0-4.328L10.749.919c1.666-.964 3.751.239 3.751 2.164v9.834c0 1.925-2.085 3.128-3.751 2.164z"></svg:path>`,
})
export class GravityUiTriangleLeftFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleRightIcon],svg[gravity-ui-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.005 7.134L4.5 2.217a1 1 0 0 0-1.5.866v9.834a1 1 0 0 0 1.5.866l8.505-4.917a1 1 0 0 0 0-1.732m.751 3.03c1.665-.962 1.665-3.366 0-4.329L5.251.918C3.584-.045 1.5 1.158 1.5 3.083v9.834c0 1.925 2.084 3.128 3.751 2.164z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleRightFillIcon],svg[gravity-ui-triangle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.756 10.164c1.665-.962 1.665-3.366 0-4.328L5.251.919C3.584-.045 1.5 1.158 1.5 3.083v9.834c0 1.925 2.084 3.128 3.751 2.164z"></svg:path>`,
})
export class GravityUiTriangleRightFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleThunderboltIcon],svg[gravity-ui-triangle-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.134 2.994L2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.328 0L.919 10.749c-.964 1.666.239 3.751 2.164 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8.671 6.585a.75.75 0 0 0-1.342-.67l-1.25 2.5A.75.75 0 0 0 6.75 9.5h1.287l-.707 1.415a.75.75 0 1 0 1.342.67l1.25-2.5A.75.75 0 0 0 9.25 8H7.963z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleThunderboltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleUpIcon],svg[gravity-ui-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.134 2.995L2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.995a1 1 0 0 0-1.732 0m3.03-.751c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleUpFillIcon],svg[gravity-ui-triangle-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.164 2.244c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751z"></svg:path>`,
})
export class GravityUiTriangleUpFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTrolleyIcon],svg[gravity-ui-trolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.988 11A1.5 1.5 0 1 0 7 11zM10 12.476v.024a3 3 0 1 1-4.473-2.614l-1.955-7.33A.75.75 0 0 0 2.848 2H1.25a.75.75 0 0 1 0-1.5h1.598a2.25 2.25 0 0 1 2.174 1.67l.542 2.035a2.3 2.3 0 0 1 .69-.317l4.602-1.231A2.25 2.25 0 0 1 13.61 4.25l1.228 4.607a2.25 2.25 0 0 1-1.595 2.753zm1.243-8.37a.75.75 0 0 1 .919.531l1.227 4.607a.75.75 0 0 1-.531.918l-3.244.865A3 3 0 0 0 7 9.5h-.024l-.865-3.245a.75.75 0 0 1 .53-.918l1.595-.427l.642 2.291a.75.75 0 0 0 1.444-.403l-.637-2.275z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTrolleyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTvIcon],svg[gravity-ui-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3.5h10A1.5 1.5 0 0 1 14.5 5v5a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 10V5A1.5 1.5 0 0 1 3 3.5m-.21 9.493A3 3 0 0 1 0 10V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5a3 3 0 0 1-2.79 2.993l.46.922a.75.75 0 1 1-1.34.67L11.536 13H4.464l-.793 1.585a.75.75 0 1 1-1.342-.67z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTvIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiTvRetroIcon],svg[gravity-ui-tv-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.086.782a.75.75 0 0 0-1.172.937L5.94 3H4a3 3 0 0 0-3 3v5a3 3 0 0 0 2.79 2.993l-.21.421a.75.75 0 0 0 1.34.671l.5-1A1 1 0 0 0 5.458 14h5.086q.015.043.036.085l.5 1a.75.75 0 0 0 1.342-.67l-.211-.422A3 3 0 0 0 15 11V6a3 3 0 0 0-3-3h-1.94l1.026-1.281A.75.75 0 0 0 9.914.782L8.14 3h-.28zM7.494 4.5H12A1.5 1.5 0 0 1 13.5 6v5a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V6A1.5 1.5 0 0 1 4 4.5zM5.5 7.5v2H8v-2zM5 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm7 .75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTvRetroIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiUmbrellaIcon],svg[gravity-ui-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.184 11.595c-.05.02-.34.112-1.114-.187c-.953-.368-2.258-1.218-3.76-2.719c-1.5-1.5-2.35-2.806-2.718-3.759c-.298-.774-.206-1.063-.186-1.113c1.57-1.535 5.177-2.013 7.483.294c2.32 2.32 1.915 5.83.295 7.484M5.79 10.27c2.947 2.747 5.427 3.411 6.428 2.41c2.062-2.061 2.616-6.141.235-9.073l.577-.578a.75.75 0 1 0-1.06-1.06l-.579.578C8.448.178 4.286.814 2.318 2.782c-1 1-.336 3.48 2.411 6.428l-2.26 2.26a2.164 2.164 0 1 0 3.061 3.06l.25-.25a.75.75 0 1 0-1.06-1.06l-.25.25a.664.664 0 1 1-.94-.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiUmbrellaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiUnderlineIcon],svg[gravity-ui-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2.75a.75.75 0 0 0-1.5 0V7a4.5 4.5 0 0 0 9 0V2.75a.75.75 0 0 0-1.5 0V7a3 3 0 0 1-6 0zm-.75 9.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiUnderlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVaultIcon],svg[gravity-ui-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 14.25v-.75h7v.75a.75.75 0 0 0 1.5 0v-.791a3 3 0 0 0 2.5-2.959v-6a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6A3 3 0 0 0 3 13.459v.791a.75.75 0 0 0 1.5 0M3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v6A1.5 1.5 0 0 0 3.5 12M8 8.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2.384-.246a2.5 2.5 0 0 0-.402-2.278l.66-.942a.75.75 0 0 0-1.229-.86l-.66.942a2.5 2.5 0 0 0-2.277.402l-.942-.66a.75.75 0 0 0-.86 1.228l.942.66a2.5 2.5 0 0 0 .402 2.277l-.66.943a.75.75 0 0 0 1.228.86l.66-.942a2.5 2.5 0 0 0 2.277-.402l.943.66a.75.75 0 1 0 .86-1.228z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVaultIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVectorCircleIcon],svg[gravity-ui-vector-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 5.5a2.74 2.74 0 0 1-1.444-.409a2.76 2.76 0 0 1-.914-.925c-.6.37-1.106.877-1.476 1.476a2.75 2.75 0 0 1 0 4.716c.37.6.877 1.106 1.476 1.476a2.75 2.75 0 0 1 4.716 0c.6-.37 1.106-.876 1.476-1.476l-.028-.017a2.748 2.748 0 0 1 .028-4.699a4.5 4.5 0 0 0-1.476-1.476l-.017.028A2.75 2.75 0 0 1 8 5.5m2.749-2.835a2.75 2.75 0 0 0-5.498 0a6.03 6.03 0 0 0-2.586 2.586a2.75 2.75 0 0 0 0 5.498a6.03 6.03 0 0 0 2.586 2.586a2.749 2.749 0 0 0 5.09 1.359c.245-.398.393-.862.408-1.36a6.03 6.03 0 0 0 2.586-2.585A2.75 2.75 0 0 0 16 8a2.75 2.75 0 0 0-2.665-2.749a6.03 6.03 0 0 0-2.586-2.586M9.25 2.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M4 8a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 4 8m5.25 5.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m4-4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVectorCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVectorSquareIcon],svg[gravity-ui-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.091 5.194q.2-.322.305-.694h3.208c.259.916.98 1.637 1.896 1.896v3.208A2.76 2.76 0 0 0 9.604 11.5H6.396A2.76 2.76 0 0 0 4.5 9.604V6.396a2.76 2.76 0 0 0 1.591-1.202M13 6.396v3.208q.372.106.694.305a2.75 2.75 0 0 1 .897 3.785A2.751 2.751 0 0 1 9.603 13H6.397q-.106.372-.305.694A2.75 2.75 0 1 1 3 9.604V6.396A2.751 2.751 0 1 1 6.396 3h3.208A2.751 2.751 0 1 1 13 6.396M3.75 2.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M5 12.25a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0M12.25 11a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m1.25-7.25a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVectorSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVideoIcon],svg[gravity-ui-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.5h5.5A1.5 1.5 0 0 1 10 6v4a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 10V6A1.5 1.5 0 0 1 3 4.5m8.452 6.037A3 3 0 0 1 8.5 13H3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5.5a3 3 0 0 1 2.952 2.463l1.554-1.11A1.893 1.893 0 0 1 16 5.893v4.214a1.893 1.893 0 0 1-2.994 1.54zm.048-1.809l2.378 1.699a.393.393 0 0 0 .622-.32V5.893a.393.393 0 0 0-.622-.32L11.5 7.272z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVideoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeIcon],svg[gravity-ui-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiVolume0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.06 9.94A1.5 1.5 0 0 0 4 9.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44l2.483-2.482a.268.268 0 0 1 .457.19v8.464a.268.268 0 0 1-.457.19zM2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m12.162 8.103c-.265.319-.743.316-1.036.024c-.292-.293-.288-.766-.031-1.09A6.47 6.47 0 0 0 14.5 8a6.47 6.47 0 0 0-1.405-4.037c-.257-.324-.261-.797.031-1.09c.293-.292.771-.294 1.036.024A7.97 7.97 0 0 1 16 8c0 1.94-.69 3.718-1.838 5.103m-2.138-2.135c-.246.333-.726.33-1.019.037s-.284-.764-.06-1.113A3.5 3.5 0 0 0 11.5 8c0-.697-.204-1.347-.555-1.892c-.224-.348-.233-.82.06-1.113s.773-.296 1.02.037C12.637 5.862 13 6.89 13 8a4.98 4.98 0 0 1-.976 2.968" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiVolume0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiVolumeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeFillIcon],svg[gravity-ui-volume-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiVolumeFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V3.414a1.414 1.414 0 0 0-2.414-1L4.5 5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11m12.662 2.103c-.265.319-.743.317-1.036.024c-.292-.293-.288-.766-.031-1.09A6.47 6.47 0 0 0 14.5 8a6.47 6.47 0 0 0-1.405-4.036c-.257-.325-.261-.797.032-1.09c.292-.293.77-.295 1.035.024A7.97 7.97 0 0 1 16 8c0 1.94-.69 3.718-1.838 5.103m-2.138-2.135c-.246.333-.726.33-1.019.037c-.293-.292-.284-.764-.06-1.112A3.5 3.5 0 0 0 11.5 8c0-.697-.204-1.346-.555-1.892c-.224-.348-.233-.82.06-1.113s.773-.296 1.02.038C12.638 5.863 13 6.889 13 8a4.98 4.98 0 0 1-.976 2.968" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiVolumeFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiVolumeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeLowIcon],svg[gravity-ui-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.06 9.94A1.5 1.5 0 0 0 4 9.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44l2.483-2.482a.268.268 0 0 1 .457.19v8.464a.268.268 0 0 1-.457.19zM2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m10.024 5.968c-.246.333-.726.33-1.019.037s-.284-.764-.06-1.113A3.5 3.5 0 0 0 11.5 8c0-.697-.204-1.347-.555-1.892c-.224-.348-.233-.82.06-1.113s.773-.296 1.02.037C12.637 5.862 13 6.89 13 8a4.98 4.98 0 0 1-.976 2.968" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeLowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeLowFillIcon],svg[gravity-ui-volume-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V3.414a1.414 1.414 0 0 0-2.414-1L4.5 5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11m10.525-.032c-.247.333-.727.33-1.02.037c-.293-.292-.284-.764-.06-1.112A3.5 3.5 0 0 0 11.5 8c0-.697-.204-1.346-.555-1.892c-.224-.348-.233-.82.06-1.113s.773-.296 1.02.038C12.638 5.863 13 6.889 13 8a4.98 4.98 0 0 1-.975 2.968" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeLowFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeOffIcon],svg[gravity-ui-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.06 9.94A1.5 1.5 0 0 0 4 9.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44l2.483-2.482a.268.268 0 0 1 .457.19v8.464a.268.268 0 0 1-.457.19zM2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeOffFillIcon],svg[gravity-ui-volume-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 11h-3A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h3l2.586-2.586a1.414 1.414 0 0 1 2.414 1v9.172a1.414 1.414 0 0 1-2.414 1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeOffFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeSlashIcon],svg[gravity-ui-volume-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiVolumeSlash0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3.03 1.97a.75.75 0 0 0-1.06 1.06L3.94 5H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2l2.482 2.482a1.767 1.767 0 0 0 3.018-1.25v-1.671l3.47 3.47a.75.75 0 1 0 1.06-1.061zM8 9.06L5.03 6.09A1.5 1.5 0 0 1 4 6.5H2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a1.5 1.5 0 0 1 1.06.44l2.483 2.482a.268.268 0 0 0 .457-.19zm0-5.292v1.03l1.5 1.5v-2.53a1.768 1.768 0 0 0-3.018-1.25l-.381.381l1.06 1.06l.382-.38A.268.268 0 0 1 8 3.767m3.489 4.519l1.265 1.265A5 5 0 0 0 13 8a4.98 4.98 0 0 0-.975-2.967c-.247-.334-.727-.33-1.02-.038s-.284.765-.06 1.113a3.5 3.5 0 0 1 .544 2.179m2.422 2.422l1.117 1.117C15.648 10.689 16 9.386 16 8c0-1.94-.69-3.717-1.838-5.102c-.264-.32-.743-.317-1.035-.024c-.293.293-.29.765-.032 1.09A6.47 6.47 0 0 1 14.5 8c0 .967-.21 1.884-.59 2.709" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiVolumeSlash0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiVolumeSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeSlashFillIcon],svg[gravity-ui-volume-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiVolumeSlashFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3.03 1.97a.75.75 0 0 0-1.06 1.06L3.94 5H1.5A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V10.56l3.47 3.47a.75.75 0 1 0 1.06-1.061zm8.459 6.317l1.265 1.265C12.915 9.064 13 8.542 13 8a4.98 4.98 0 0 0-.975-2.967c-.247-.334-.727-.33-1.02-.038s-.284.765-.06 1.113a3.5 3.5 0 0 1 .544 2.179m2.422 2.422l1.117 1.117C15.648 10.689 16 9.386 16 8c0-1.94-.69-3.717-1.838-5.102c-.264-.32-.743-.317-1.035-.024c-.293.293-.29.765-.032 1.09A6.47 6.47 0 0 1 14.5 8c0 .967-.21 1.884-.59 2.709m-7.56-7.56L9.5 6.298V3.414a1.414 1.414 0 0 0-2.414-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiVolumeSlashFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiVolumeSlashFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeXmarkIcon],svg[gravity-ui-volume-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.06 9.94A1.5 1.5 0 0 0 4 9.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44l2.483-2.482a.268.268 0 0 1 .457.19v8.464a.268.268 0 0 1-.457.19zM2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m10.28.72a.75.75 0 1 0-1.06 1.06L12.44 8l-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 1 0 1.06-1.06L14.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L13.5 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeXmarkFillIcon],svg[gravity-ui-volume-xmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V3.414a1.414 1.414 0 0 0-2.414-1L4.5 5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11m10.78-5.28a.75.75 0 1 0-1.06 1.06L12.44 8l-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 1 0 1.06-1.06L14.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L13.5 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeXmarkFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiWeightHangingIcon],svg[gravity-ui-weight-hanging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 4.886A2.5 2.5 0 0 1 5.5 2.5a2.5 2.5 0 1 1 3.25 2.386V6h2.904a2.5 2.5 0 0 1 2.389 1.765l1.36 4.423A2.173 2.173 0 0 1 13.328 15H2.673a2.173 2.173 0 0 1-2.077-2.812l.252-.82l1.109-3.603A2.5 2.5 0 0 1 4.347 6H7.25zM9 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4.654 5a1 1 0 0 0-.955.706L2.03 12.629a.673.673 0 0 0 .643.871h10.654a.673.673 0 0 0 .643-.871l-1.36-4.423a1 1 0 0 0-.956-.706z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiWeightHangingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiWrenchIcon],svg[gravity-ui-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.581 9.298l.776.143q.311.059.643.059A3.5 3.5 0 0 0 13.5 6q0-.177-.027-.352l-1.39 1.39a1.58 1.58 0 0 1-1.114.462A2.47 2.47 0 0 1 8.5 5.03c0-.417.166-.817.461-1.112l1.39-1.39A2.4 2.4 0 0 0 10 2.5a3.5 3.5 0 0 0-3.441 4.143l.143.776l-3.813 3.813a1.329 1.329 0 0 0 1.879 1.879zm3.817-6.787a.795.795 0 0 0-.411-1.018C11.87 1.432 11.014 1 10 1a5 5 0 0 0-4.916 5.916l-3.256 3.256a2.828 2.828 0 1 0 4 4l3.256-3.256Q9.53 11 10 11a5 5 0 0 0 5-5c0-1.014-.432-1.87-.493-1.987l-.014-.027a.795.795 0 0 0-1.273-.207l-2.198 2.2a.07.07 0 0 1-.053.021a.97.97 0 0 1-.969-.97q0-.03.022-.052L12.22 2.78a.8.8 0 0 0 .178-.27" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiWrenchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiXmarkIcon],svg[gravity-ui-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8L3.47 4.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiXmarkShapeIcon],svg[gravity-ui-xmark-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 10.121l2.652 2.652a.25.25 0 0 0 .353 0l1.768-1.768a.25.25 0 0 0 0-.353L10.121 8l2.652-2.652a.25.25 0 0 0 0-.353l-1.768-1.768a.25.25 0 0 0-.353 0L8 5.879L5.348 3.227a.25.25 0 0 0-.353 0L3.227 4.995a.25.25 0 0 0 0 .353L5.879 8l-2.652 2.652a.25.25 0 0 0 0 .353l1.768 1.768a.25.25 0 0 0 .353 0zm0 2.122l1.591 1.59a1.75 1.75 0 0 0 2.475 0l1.768-1.767a1.75 1.75 0 0 0 0-2.475L12.243 8l1.59-1.591a1.75 1.75 0 0 0 0-2.475l-1.767-1.768a1.75 1.75 0 0 0-2.475 0L8 3.757l-1.591-1.59a1.75 1.75 0 0 0-2.475 0L2.166 3.933a1.75 1.75 0 0 0 0 2.475L3.757 8l-1.59 1.591a1.75 1.75 0 0 0 0 2.475l1.767 1.768a1.75 1.75 0 0 0 2.475 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiXmarkShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiXmarkShapeFillIcon],svg[gravity-ui-xmark-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 12.243L6.232 14.01a1.5 1.5 0 0 1-2.121 0L1.99 11.89a1.5 1.5 0 0 1 0-2.122L3.757 8L1.99 6.232a1.5 1.5 0 0 1 0-2.121L4.11 1.99a1.5 1.5 0 0 1 2.122 0L8 3.757L9.768 1.99a1.5 1.5 0 0 1 2.121 0l2.122 2.12a1.5 1.5 0 0 1 0 2.122L12.243 8l1.767 1.768a1.5 1.5 0 0 1 0 2.121l-2.12 2.121a1.5 1.5 0 0 1-2.122 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiXmarkShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiAbbrQlIcon],svg[gravity-ui-abbr-ql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 4a.75.75 0 0 1 .75.75v5.75h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75m-3.21 6.997c.611-.666.96-1.665.96-2.997c0-2.667-1.4-4-3.5-4S1.5 5.333 1.5 8s1.4 4 3.5 4q.674 0 1.24-.182l1.456 1.461a.75.75 0 1 0 1.063-1.058zM7 8c0 1.083-.282 1.675-.567 1.985c-.27.294-.708.515-1.433.515s-1.163-.22-1.433-.515C3.282 9.675 3 9.083 3 8c0-1.082.282-1.675.567-1.985C3.837 5.72 4.275 5.5 5 5.5s1.163.22 1.433.515C6.718 6.325 7 6.918 7 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiAbbrQlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowChevronDownIcon],svg[gravity-ui-arrow-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2a.75.75 0 0 0-1.5 0v5.69L4.53 4.97a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 0 0-1.06-1.06L8.75 7.69zM4.53 9.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L8 12.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowChevronDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArchiveIcon],svg[gravity-ui-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8h11v3a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11zm10.697-1.5l-1.851-2.777a.5.5 0 0 0-.416-.223H5.07a.5.5 0 0 0-.416.223L2.803 6.5zM15 7.408V11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7.408a3 3 0 0 1 .504-1.664l1.902-2.853A2 2 0 0 1 5.07 2h5.86a2 2 0 0 1 1.664.89l1.902 2.854A3 3 0 0 1 15 7.408M9.25 11a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArchiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiApertureIcon],svg[gravity-ui-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 0 1-.48 2.251a7 7 0 0 0-.897-2.61c-.64-1.109-1.517-1.984-2.467-2.508l-.013-.008a5 5 0 0 0-.19-.098c-.634-.314-1.33-.484-2.006-.428c.464-.575.995-1.002 1.514-1.259c.733-.362 1.356-.353 1.789-.103v-.001A5.5 5.5 0 0 1 13.5 8M7.438 2.528A5.5 5.5 0 0 0 2.5 8c0 .5.304 1.044.984 1.497c.482.322 1.117.568 1.847.682c-.386-.558-.587-1.245-.633-1.951a5 5 0 0 1-.009-.213v-.012c-.022-1.086.298-2.284.938-3.394a7 7 0 0 1 1.811-2.08M6.189 8.002l.006.13c.053.815.372 1.35.805 1.6s1.056.259 1.789-.104l.117-.06l.11-.07C9.696 9.043 10 8.5 10 8s-.304-1.044-.984-1.497l-.11-.071l-.117-.06C8.056 6.009 7.433 6.018 7 6.268s-.752.785-.805 1.6zm3.468 2.865l.011-.007q.091-.055.18-.115c.59-.392 1.084-.91 1.374-1.523c.266.69.37 1.362.333 1.94c-.053.816-.372 1.351-.805 1.601A5.5 5.5 0 0 1 8 13.5a5.5 5.5 0 0 1-4.458-2.278c.8.34 1.73.528 2.708.528c1.28 0 2.477-.322 3.407-.883M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiApertureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
