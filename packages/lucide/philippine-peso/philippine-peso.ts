import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePhilippinePeso],svg[lucide-philippine-peso]',
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
  template: `<svg:path d="M20 11H4"></svg:path>
    <svg:path d="M20 7H4"></svg:path>
    <svg:path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"></svg:path>`,
})
export class LucidePhilippinePeso {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
