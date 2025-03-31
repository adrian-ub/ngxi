import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundCheck],svg[lucide-user-round-check]',
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
  template: `<svg:path d="M2 21a8 8 0 0 1 13.292-6"></svg:path>
    <svg:circle cx="10" cy="8" r="5"></svg:circle>
    <svg:path d="m16 19 2 2 4-4"></svg:path>`,
})
export class LucideUserRoundCheck {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
