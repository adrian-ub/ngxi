import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryPlus],svg[lucide-battery-plus]',
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
  template: `<svg:path d="M10 9v6"></svg:path>
    <svg:path d="M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5"></svg:path>
    <svg:path d="M22 11v2"></svg:path>
    <svg:path d="M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"></svg:path>
    <svg:path d="M7 12h6"></svg:path>`,
})
export class LucideBatteryPlus {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
