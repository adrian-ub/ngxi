import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLink2],svg[lucide-link-2]',
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
  template: `<svg:path d="M9 17H7A5 5 0 0 1 7 7h2"></svg:path>
    <svg:path d="M15 7h2a5 5 0 1 1 0 10h-2"></svg:path>
    <svg:line x1="8" x2="16" y1="12" y2="12"></svg:line>`,
})
export class LucideLink2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
