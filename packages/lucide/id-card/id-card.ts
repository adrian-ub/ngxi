import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIdCard],svg[lucide-id-card]',
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
  template: `<svg:path d="M16 10h2"></svg:path>
    <svg:path d="M16 14h2"></svg:path>
    <svg:path d="M6.17 15a3 3 0 0 1 5.66 0"></svg:path>
    <svg:circle cx="9" cy="11" r="2"></svg:circle>
    <svg:rect x="2" y="5" width="20" height="14" rx="2"></svg:rect>`,
})
export class LucideIdCard {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
