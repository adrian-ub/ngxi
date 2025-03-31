import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSeparatorVertical],svg[lucide-separator-vertical]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:line x1="12" x2="12" y1="3" y2="21"></svg:line>
    <svg:polyline points="8 8 4 12 8 16"></svg:polyline>
    <svg:polyline points="16 16 20 12 16 8"></svg:polyline>`,
})
export class LucideSeparatorVertical {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
