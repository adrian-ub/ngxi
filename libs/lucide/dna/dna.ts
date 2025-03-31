import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDna],svg[lucide-dna]',
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
    <svg:path d="m10 16 1.5 1.5" />
    <svg:path d="m14 8-1.5-1.5" />
    <svg:path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    <svg:path d="m16.5 10.5 1 1" />
    <svg:path d="m17 6-2.891-2.891" />
    <svg:path d="M2 15c6.667-6 13.333 0 20-6" />
    <svg:path d="m20 9 .891.891" />
    <svg:path d="M3.109 14.109 4 15" />
    <svg:path d="m6.5 12.5 1 1" />
    <svg:path d="m7 18 2.891 2.891" />
    <svg:path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
  `,
})
export class LucideDna {
  readonly class = input('lucide lucide-dna');
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
