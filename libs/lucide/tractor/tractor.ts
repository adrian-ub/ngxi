import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTractor],svg[lucide-tractor]',
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
    <svg:path
      d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"
    />
    <svg:path d="M16 18h-5" />
    <svg:path d="M18 5a1 1 0 0 0-1 1v5.573" />
    <svg:path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
    <svg:path d="M4 11V4" />
    <svg:path d="M7 15h.01" />
    <svg:path d="M8 10.1V4" />
    <svg:circle cx="18" cy="18" r="2" />
    <svg:circle cx="7" cy="15" r="5" />
  `,
})
export class LucideTractor {
  readonly class = input('lucide lucide-tractor');
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
