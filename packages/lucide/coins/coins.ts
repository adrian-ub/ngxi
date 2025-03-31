import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCoins],svg[lucide-coins]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:circle cx="8" cy="8" r="6" />
    <svg:path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <svg:path d="M7 6h1v4" />
    <svg:path d="m16.71 13.88.7.71-2.82 2.82" />
  `,
})
export class LucideCoins {
  readonly class = input('lucide lucide-coins');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
