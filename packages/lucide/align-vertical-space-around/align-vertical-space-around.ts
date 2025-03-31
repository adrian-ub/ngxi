import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalSpaceAround],svg[lucide-align-vertical-space-around]',
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
  template: `<svg:rect width="10" height="6" x="7" y="9" rx="2"></svg:rect>
    <svg:path d="M22 20H2"></svg:path>
    <svg:path d="M22 4H2"></svg:path>`,
})
export class LucideAlignVerticalSpaceAround {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
