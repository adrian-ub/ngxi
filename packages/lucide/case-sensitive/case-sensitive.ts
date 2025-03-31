import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaseSensitive],svg[lucide-case-sensitive]',
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
  template: `<svg:path d="m3 15 4-8 4 8"></svg:path>
    <svg:path d="M4 13h6"></svg:path>
    <svg:circle cx="18" cy="12" r="3"></svg:circle>
    <svg:path d="M21 9v6"></svg:path>`,
})
export class LucideCaseSensitive {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
