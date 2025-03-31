import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRepeat2],svg[lucide-repeat-2]',
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
  template: `<svg:path d="m2 9 3-3 3 3"></svg:path>
    <svg:path d="M13 18H7a2 2 0 0 1-2-2V6"></svg:path>
    <svg:path d="m22 15-3 3-3-3"></svg:path>
    <svg:path d="M11 6h6a2 2 0 0 1 2 2v10"></svg:path>`,
})
export class LucideRepeat2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
