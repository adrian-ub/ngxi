import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWindArrowDown],svg[lucide-wind-arrow-down]',
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
    <svg:path d="M10 2v8" />
    <svg:path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
    <svg:path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
    <svg:path d="m6 6 4 4 4-4" />
  `,
})
export class LucideWindArrowDown {
  readonly class = input('lucide lucide-wind-arrow-down');
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
