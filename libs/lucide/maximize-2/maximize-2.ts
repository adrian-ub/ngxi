import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMaximize2],svg[lucide-maximize-2]',
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
    <svg:polyline points="15 3 21 3 21 9" />
    <svg:polyline points="9 21 3 21 3 15" />
    <svg:line x1="21" x2="14" y1="3" y2="10" />
    <svg:line x1="3" x2="10" y1="21" y2="14" />
  `,
})
export class LucideMaximize2 {
  readonly class = input('lucide lucide-maximize-2');
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
