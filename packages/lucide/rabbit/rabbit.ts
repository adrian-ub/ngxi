import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRabbit],svg[lucide-rabbit]',
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
  template: `<svg:path d="M13 16a3 3 0 0 1 2.24 5"></svg:path>
    <svg:path d="M18 12h.01"></svg:path>
    <svg:path
      d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
    ></svg:path>
    <svg:path d="M20 8.54V4a2 2 0 1 0-4 0v3"></svg:path>
    <svg:path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"></svg:path>`,
})
export class LucideRabbit {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
