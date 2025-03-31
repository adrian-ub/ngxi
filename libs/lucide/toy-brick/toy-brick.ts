import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideToyBrick],svg[lucide-toy-brick]',
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
    <svg:rect width="18" height="12" x="3" y="8" rx="1" />
    <svg:path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
    <svg:path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
  `,
})
export class LucideToyBrick {
  readonly class = input('lucide lucide-toy-brick');
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
