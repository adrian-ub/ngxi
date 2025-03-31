import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShrink],svg[lucide-shrink]',
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
  template: `<svg:path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"></svg:path>
    <svg:path d="M9 19.8V15m0 0H4.2M9 15l-6 6"></svg:path>
    <svg:path d="M15 4.2V9m0 0h4.8M15 9l6-6"></svg:path>
    <svg:path d="M9 4.2V9m0 0H4.2M9 9 3 3"></svg:path>`,
})
export class LucideShrink {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
