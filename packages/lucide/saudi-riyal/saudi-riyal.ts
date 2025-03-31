import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSaudiRiyal],svg[lucide-saudi-riyal]',
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
    <svg:path d="m20 19.5-5.5 1.2" />
    <svg:path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" />
    <svg:path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" />
    <svg:path d="M20 10 4 13.5" />
  `,
})
export class LucideSaudiRiyal {
  readonly class = input('lucide lucide-saudi-riyal');
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
