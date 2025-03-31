import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDice4],svg[lucide-dice-4]',
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
  template: `<svg:rect
      width="18"
      height="18"
      x="3"
      y="3"
      rx="2"
      ry="2"
    ></svg:rect>
    <svg:path d="M16 8h.01"></svg:path>
    <svg:path d="M8 8h.01"></svg:path>
    <svg:path d="M8 16h.01"></svg:path>
    <svg:path d="M16 16h.01"></svg:path>`,
})
export class LucideDice4 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
