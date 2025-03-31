import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIceCreamCone],svg[lucide-ice-cream-cone]',
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
    <svg:path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
    <svg:path d="M17 7A5 5 0 0 0 7 7" />
    <svg:path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
  `,
})
export class LucideIceCreamCone {
  readonly class = input('lucide lucide-ice-cream-cone');
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
