import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShoppingBasket],svg[lucide-shopping-basket]',
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
  template: `<svg:path d="m15 11-1 9"></svg:path>
    <svg:path d="m19 11-4-7"></svg:path>
    <svg:path d="M2 11h20"></svg:path>
    <svg:path
      d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
    ></svg:path>
    <svg:path d="M4.5 15.5h15"></svg:path>
    <svg:path d="m5 11 4-7"></svg:path>
    <svg:path d="m9 11 1 9"></svg:path>`,
})
export class LucideShoppingBasket {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
