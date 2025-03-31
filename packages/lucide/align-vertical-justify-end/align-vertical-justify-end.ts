import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalJustifyEnd],svg[lucide-align-vertical-justify-end]',
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
  template: `<svg:rect width="14" height="6" x="5" y="12" rx="2"></svg:rect>
    <svg:rect width="10" height="6" x="7" y="2" rx="2"></svg:rect>
    <svg:path d="M2 22h20"></svg:path>`,
})
export class LucideAlignVerticalJustifyEnd {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
