import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMailSearch],svg[lucide-mail-search]',
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
  template: `<svg:path
      d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
    ></svg:path>
    <svg:path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></svg:path>
    <svg:path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></svg:path>
    <svg:circle cx="18" cy="18" r="3"></svg:circle>
    <svg:path d="m22 22-1.5-1.5"></svg:path>`,
})
export class LucideMailSearch {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
