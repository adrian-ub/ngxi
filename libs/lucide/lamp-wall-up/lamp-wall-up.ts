import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampWallUp],svg[lucide-lamp-wall-up]',
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
    <svg:path d="M11 4h6l3 7H8l3-7Z" />
    <svg:path d="M14 11v5a2 2 0 0 1-2 2H8" />
    <svg:path d="M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" />
  `,
})
export class LucideLampWallUp {
  readonly class = input('lucide lucide-lamp-wall-up');
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
