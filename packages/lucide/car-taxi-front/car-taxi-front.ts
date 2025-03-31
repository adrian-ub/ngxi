import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCarTaxiFront],svg[lucide-car-taxi-front]',
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
  template: `<svg:path d="M10 2h4"></svg:path>
    <svg:path
      d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
    ></svg:path>
    <svg:path d="M7 14h.01"></svg:path>
    <svg:path d="M17 14h.01"></svg:path>
    <svg:rect width="18" height="8" x="3" y="10" rx="2"></svg:rect>
    <svg:path d="M5 18v2"></svg:path>
    <svg:path d="M19 18v2"></svg:path>`,
})
export class LucideCarTaxiFront {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
