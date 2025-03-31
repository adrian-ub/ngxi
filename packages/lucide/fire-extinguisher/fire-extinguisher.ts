import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFireExtinguisher],svg[lucide-fire-extinguisher]',
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
  template: `<svg:path
      d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"
    ></svg:path>
    <svg:path d="M9 18h8"></svg:path>
    <svg:path d="M18 3h-3"></svg:path>
    <svg:path d="M11 3a6 6 0 0 0-6 6v11"></svg:path>
    <svg:path d="M5 13h4"></svg:path>
    <svg:path
      d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"
    ></svg:path>`,
})
export class LucideFireExtinguisher {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
