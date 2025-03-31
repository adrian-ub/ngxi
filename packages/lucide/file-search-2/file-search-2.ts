import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileSearch2],svg[lucide-file-search-2]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path
      d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
    ></svg:path>
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path>
    <svg:circle cx="11.5" cy="14.5" r="2.5"></svg:circle>
    <svg:path d="M13.3 16.3 15 18"></svg:path>`,
})
export class LucideFileSearch2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
