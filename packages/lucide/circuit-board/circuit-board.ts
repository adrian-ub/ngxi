import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircuitBoard],svg[lucide-circuit-board]',
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
  template: `<svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect>
    <svg:path d="M11 9h4a2 2 0 0 0 2-2V3"></svg:path>
    <svg:circle cx="9" cy="9" r="2"></svg:circle>
    <svg:path d="M7 21v-4a2 2 0 0 1 2-2h4"></svg:path>
    <svg:circle cx="15" cy="15" r="2"></svg:circle>`,
})
export class LucideCircuitBoard {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
