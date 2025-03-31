import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSunSnow],svg[lucide-sun-snow]',
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
    <svg:path d="M10 21v-1" />
    <svg:path d="M10 4V3" />
    <svg:path d="M10 9a3 3 0 0 0 0 6" />
    <svg:path d="m14 20 1.25-2.5L18 18" />
    <svg:path d="m14 4 1.25 2.5L18 6" />
    <svg:path d="m17 21-3-6 1.5-3H22" />
    <svg:path d="m17 3-3 6 1.5 3" />
    <svg:path d="M2 12h1" />
    <svg:path d="m20 10-1.5 2 1.5 2" />
    <svg:path d="m3.64 18.36.7-.7" />
    <svg:path d="m4.34 6.34-.7-.7" />
  `,
})
export class LucideSunSnow {
  readonly class = input('lucide lucide-sun-snow');
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
