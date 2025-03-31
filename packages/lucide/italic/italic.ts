import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideItalic],svg[lucide-italic]',
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
  template: `<svg:line x1="19" x2="10" y1="4" y2="4"></svg:line>
    <svg:line x1="14" x2="5" y1="20" y2="20"></svg:line>
    <svg:line x1="15" x2="9" y1="4" y2="20"></svg:line>`,
})
export class LucideItalic {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
