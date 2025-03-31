import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAccessibility],svg[lucide-accessibility]',
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
  template: `<svg:circle cx="16" cy="4" r="1"></svg:circle>
    <svg:path d="m18 19 1-7-6 1"></svg:path>
    <svg:path d="m5 8 3-3 5.5 3-2.36 3.5"></svg:path>
    <svg:path d="M4.24 14.5a5 5 0 0 0 6.88 6"></svg:path>
    <svg:path d="M13.76 17.5a5 5 0 0 0-6.88-6"></svg:path>`,
})
export class LucideAccessibility {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
