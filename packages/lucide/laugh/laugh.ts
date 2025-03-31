import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLaugh],svg[lucide-laugh]',
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
  template: `<svg:circle cx="12" cy="12" r="10"></svg:circle>
    <svg:path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></svg:path>
    <svg:line x1="9" x2="9.01" y1="9" y2="9"></svg:line>
    <svg:line x1="15" x2="15.01" y1="9" y2="9"></svg:line>`,
})
export class LucideLaugh {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
