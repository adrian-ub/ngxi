import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHospital],svg[lucide-hospital]',
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
  template: `<svg:path d="M12 6v4"></svg:path>
    <svg:path d="M14 14h-4"></svg:path>
    <svg:path d="M14 18h-4"></svg:path>
    <svg:path d="M14 8h-4"></svg:path>
    <svg:path
      d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"
    ></svg:path>
    <svg:path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></svg:path>`,
})
export class LucideHospital {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
