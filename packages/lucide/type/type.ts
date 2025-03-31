import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideType],svg[lucide-type]',
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
  template: `<svg:polyline points="4 7 4 4 20 4 20 7"></svg:polyline>
    <svg:line x1="9" x2="15" y1="20" y2="20"></svg:line>
    <svg:line x1="12" x2="12" y1="4" y2="20"></svg:line>`,
})
export class LucideType {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
