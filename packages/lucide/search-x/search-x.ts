import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSearchX],svg[lucide-search-x]',
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
  template: `<svg:path d="m13.5 8.5-5 5"></svg:path>
    <svg:path d="m8.5 8.5 5 5"></svg:path>
    <svg:circle cx="11" cy="11" r="8"></svg:circle>
    <svg:path d="m21 21-4.3-4.3"></svg:path>`,
})
export class LucideSearchX {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
