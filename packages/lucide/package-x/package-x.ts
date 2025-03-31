import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePackageX],svg[lucide-package-x]',
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
      d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
    ></svg:path>
    <svg:path d="m7.5 4.27 9 5.15"></svg:path>
    <svg:polyline points="3.29 7 12 12 20.71 7"></svg:polyline>
    <svg:line x1="12" x2="12" y1="22" y2="12"></svg:line>
    <svg:path d="m17 13 5 5m-5 0 5-5"></svg:path>`,
})
export class LucidePackageX {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
