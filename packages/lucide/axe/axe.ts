import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAxe],svg[lucide-axe]',
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
  template: `<svg:path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"></svg:path>
    <svg:path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"></svg:path>`,
})
export class LucideAxe {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
