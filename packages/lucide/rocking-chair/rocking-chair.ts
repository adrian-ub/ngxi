import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRockingChair],svg[lucide-rocking-chair]',
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
  template: `<svg:polyline points="3.5 2 6.5 12.5 18 12.5"></svg:polyline>
    <svg:line x1="9.5" x2="5.5" y1="12.5" y2="20"></svg:line>
    <svg:line x1="15" x2="18.5" y1="12.5" y2="20"></svg:line>
    <svg:path d="M2.75 18a13 13 0 0 0 18.5 0"></svg:path>`,
})
export class LucideRockingChair {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
