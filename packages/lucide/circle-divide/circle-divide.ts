import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleDivide],svg[lucide-circle-divide]',
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
  template: `<svg:line x1="8" x2="16" y1="12" y2="12"></svg:line>
    <svg:line x1="12" x2="12" y1="16" y2="16"></svg:line>
    <svg:line x1="12" x2="12" y1="8" y2="8"></svg:line>
    <svg:circle cx="12" cy="12" r="10"></svg:circle>`,
})
export class LucideCircleDivide {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
