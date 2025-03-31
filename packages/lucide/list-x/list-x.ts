import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListX],svg[lucide-list-x]',
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
  template: `<svg:path d="M11 12H3"></svg:path>
    <svg:path d="M16 6H3"></svg:path>
    <svg:path d="M16 18H3"></svg:path>
    <svg:path d="m19 10-4 4"></svg:path>
    <svg:path d="m15 10 4 4"></svg:path>`,
})
export class LucideListX {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
