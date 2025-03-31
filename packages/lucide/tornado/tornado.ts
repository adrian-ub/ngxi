import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTornado],svg[lucide-tornado]',
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
  template: `<svg:path d="M21 4H3"></svg:path>
    <svg:path d="M18 8H6"></svg:path>
    <svg:path d="M19 12H9"></svg:path>
    <svg:path d="M16 16h-6"></svg:path>
    <svg:path d="M11 20H9"></svg:path>`,
})
export class LucideTornado {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
