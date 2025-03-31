import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSpline],svg[lucide-spline]',
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
  template: `<svg:circle cx="19" cy="5" r="2"></svg:circle>
    <svg:circle cx="5" cy="19" r="2"></svg:circle>
    <svg:path d="M5 17A12 12 0 0 1 17 5"></svg:path>`,
})
export class LucideSpline {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
