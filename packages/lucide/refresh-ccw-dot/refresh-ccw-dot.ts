import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRefreshCcwDot],svg[lucide-refresh-ccw-dot]',
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
  template: `<svg:path d="M3 2v6h6"></svg:path>
    <svg:path d="M21 12A9 9 0 0 0 6 5.3L3 8"></svg:path>
    <svg:path d="M21 22v-6h-6"></svg:path>
    <svg:path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></svg:path>
    <svg:circle cx="12" cy="12" r="1"></svg:circle>`,
})
export class LucideRefreshCcwDot {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
