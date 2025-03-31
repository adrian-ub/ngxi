import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundSearch],svg[lucide-user-round-search]',
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
  template: `<svg:circle cx="10" cy="8" r="5"></svg:circle>
    <svg:path d="M2 21a8 8 0 0 1 10.434-7.62"></svg:path>
    <svg:circle cx="18" cy="18" r="3"></svg:circle>
    <svg:path d="m22 22-1.9-1.9"></svg:path>`,
})
export class LucideUserRoundSearch {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
