import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideProjector],svg[lucide-projector]',
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
  template: `<svg:path d="M5 7 3 5"></svg:path>
    <svg:path d="M9 6V3"></svg:path>
    <svg:path d="m13 7 2-2"></svg:path>
    <svg:circle cx="9" cy="13" r="3"></svg:circle>
    <svg:path
      d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
    ></svg:path>
    <svg:path d="M16 16h2"></svg:path>`,
})
export class LucideProjector {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
