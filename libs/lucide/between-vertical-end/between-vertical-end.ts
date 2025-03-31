import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBetweenVerticalEnd],svg[lucide-between-vertical-end]',
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
    <svg:rect width="7" height="13" x="3" y="3" rx="1" />
    <svg:path d="m9 22 3-3 3 3" />
    <svg:rect width="7" height="13" x="14" y="3" rx="1" />
  `,
})
export class LucideBetweenVerticalEnd {
  readonly class = input('lucide lucide-between-vertical-end');
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
