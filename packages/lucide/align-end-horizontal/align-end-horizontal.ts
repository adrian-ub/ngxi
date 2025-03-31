import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignEndHorizontal],svg[lucide-align-end-horizontal]',
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
  template: `<svg:rect width="6" height="16" x="4" y="2" rx="2"></svg:rect>
    <svg:rect width="6" height="9" x="14" y="9" rx="2"></svg:rect>
    <svg:path d="M22 22H2"></svg:path>`,
})
export class LucideAlignEndHorizontal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
