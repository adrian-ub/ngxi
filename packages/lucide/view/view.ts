import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideView],svg[lucide-view]',
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
  template: `<svg:path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></svg:path>
    <svg:path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"></svg:path>
    <svg:circle cx="12" cy="12" r="1"></svg:circle>
    <svg:path
      d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
    ></svg:path>`,
})
export class LucideView {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
