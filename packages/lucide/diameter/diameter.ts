import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDiameter],svg[lucide-diameter]',
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
    <svg:circle cx="19" cy="19" r="2" />
    <svg:circle cx="5" cy="5" r="2" />
    <svg:path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
    <svg:path d="m6.41 6.41 11.18 11.18" />
    <svg:path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
  `,
})
export class LucideDiameter {
  readonly class = input('lucide lucide-diameter');
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
