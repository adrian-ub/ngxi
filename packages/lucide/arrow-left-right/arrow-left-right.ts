import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowLeftRight],svg[lucide-arrow-left-right]',
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
  template: `<svg:path d="M8 3 4 7l4 4"></svg:path>
    <svg:path d="M4 7h16"></svg:path>
    <svg:path d="m16 21 4-4-4-4"></svg:path>
    <svg:path d="M20 17H4"></svg:path>`,
})
export class LucideArrowLeftRight {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
