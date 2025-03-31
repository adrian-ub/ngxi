import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSailboat],svg[lucide-sailboat]',
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
  template: `<svg:path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"></svg:path>
    <svg:path d="M21 14 10 2 3 14h18Z"></svg:path>
    <svg:path d="M10 2v16"></svg:path>`,
})
export class LucideSailboat {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
