import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTent],svg[lucide-tent]',
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
  template: `<svg:path d="M3.5 21 14 3"></svg:path>
    <svg:path d="M20.5 21 10 3"></svg:path>
    <svg:path d="M15.5 21 12 15l-3.5 6"></svg:path>
    <svg:path d="M2 21h20"></svg:path>`,
})
export class LucideTent {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
