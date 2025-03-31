import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSplit],svg[lucide-split]',
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
  template: `<svg:path d="M16 3h5v5"></svg:path>
    <svg:path d="M8 3H3v5"></svg:path>
    <svg:path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></svg:path>
    <svg:path d="m15 9 6-6"></svg:path>`,
})
export class LucideSplit {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
