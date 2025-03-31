import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampDesk],svg[lucide-lamp-desk]',
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
    <svg:path d="m14 5-3 3 2 7 8-8-7-2Z" />
    <svg:path d="m14 5-3 3-3-3 3-3 3 3Z" />
    <svg:path d="M9.5 6.5 4 12l3 6" />
    <svg:path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
  `,
})
export class LucideLampDesk {
  readonly class = input('lucide lucide-lamp-desk');
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
