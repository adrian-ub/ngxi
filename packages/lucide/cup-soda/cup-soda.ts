import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCupSoda],svg[lucide-cup-soda]',
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
      d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"
    ></svg:path>
    <svg:path d="M5 8h14"></svg:path>
    <svg:path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></svg:path>
    <svg:path d="m12 8 1-6h2"></svg:path>`,
})
export class LucideCupSoda {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
