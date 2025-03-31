import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBed],svg[lucide-bed]',
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
  template: `<svg:path d="M2 4v16"></svg:path>
    <svg:path d="M2 8h18a2 2 0 0 1 2 2v10"></svg:path>
    <svg:path d="M2 17h20"></svg:path>
    <svg:path d="M6 8v9"></svg:path>`,
})
export class LucideBed {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
