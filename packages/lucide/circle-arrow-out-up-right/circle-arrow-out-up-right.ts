import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideCircleArrowOutUpRight],svg[lucide-circle-arrow-out-up-right]',
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
  template: `<svg:path d="M22 12A10 10 0 1 1 12 2"></svg:path>
    <svg:path d="M22 2 12 12"></svg:path>
    <svg:path d="M16 2h6v6"></svg:path>`,
})
export class LucideCircleArrowOutUpRight {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
