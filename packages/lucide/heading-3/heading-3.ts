import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading3],svg[lucide-heading-3]',
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
  template: `<svg:path d="M4 12h8"></svg:path>
    <svg:path d="M4 18V6"></svg:path>
    <svg:path d="M12 18V6"></svg:path>
    <svg:path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"></svg:path>
    <svg:path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"></svg:path>`,
})
export class LucideHeading3 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
