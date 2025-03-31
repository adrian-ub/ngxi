import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBedDouble],svg[lucide-bed-double]',
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
  template: `<svg:path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></svg:path>
    <svg:path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></svg:path>
    <svg:path d="M12 4v6"></svg:path>
    <svg:path d="M2 18h20"></svg:path>`,
})
export class LucideBedDouble {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
