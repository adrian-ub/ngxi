import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePilcrowLeft],svg[lucide-pilcrow-left]',
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
  template: `<svg:path d="M14 3v11"></svg:path>
    <svg:path d="M14 9h-3a3 3 0 0 1 0-6h9"></svg:path>
    <svg:path d="M18 3v11"></svg:path>
    <svg:path d="M22 18H2l4-4"></svg:path>
    <svg:path d="m6 22-4-4"></svg:path>`,
})
export class LucidePilcrowLeft {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
