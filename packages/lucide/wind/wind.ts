import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWind],svg[lucide-wind]',
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
  template: `<svg:path d="M12.8 19.6A2 2 0 1 0 14 16H2"></svg:path>
    <svg:path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></svg:path>
    <svg:path d="M9.8 4.4A2 2 0 1 1 11 8H2"></svg:path>`,
})
export class LucideWind {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
