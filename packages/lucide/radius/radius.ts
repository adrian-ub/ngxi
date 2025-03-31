import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRadius],svg[lucide-radius]',
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
  template: `<svg:path d="M20.34 17.52a10 10 0 1 0-2.82 2.82"></svg:path>
    <svg:circle cx="19" cy="19" r="2"></svg:circle>
    <svg:path d="m13.41 13.41 4.18 4.18"></svg:path>
    <svg:circle cx="12" cy="12" r="2"></svg:circle>`,
})
export class LucideRadius {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
