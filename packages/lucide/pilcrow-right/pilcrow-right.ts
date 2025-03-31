import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePilcrowRight],svg[lucide-pilcrow-right]',
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
  template: `<svg:path d="M10 3v11"></svg:path>
    <svg:path d="M10 9H7a1 1 0 0 1 0-6h8"></svg:path>
    <svg:path d="M14 3v11"></svg:path>
    <svg:path d="m18 14 4 4H2"></svg:path>
    <svg:path d="m22 18-4 4"></svg:path>`,
})
export class LucidePilcrowRight {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
