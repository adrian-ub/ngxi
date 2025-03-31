import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMicrowave],svg[lucide-microwave]',
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
  template: `<svg:rect width="20" height="15" x="2" y="4" rx="2"></svg:rect>
    <svg:rect width="8" height="7" x="6" y="8" rx="1"></svg:rect>
    <svg:path d="M18 8v7"></svg:path>
    <svg:path d="M6 19v2"></svg:path>
    <svg:path d="M18 19v2"></svg:path>`,
})
export class LucideMicrowave {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
