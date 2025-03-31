import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStrikethrough],svg[lucide-strikethrough]',
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
  template: `<svg:path d="M16 4H9a3 3 0 0 0-2.83 4"></svg:path>
    <svg:path d="M14 12a4 4 0 0 1 0 8H6"></svg:path>
    <svg:line x1="4" x2="20" y1="12" y2="12"></svg:line>`,
})
export class LucideStrikethrough {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
