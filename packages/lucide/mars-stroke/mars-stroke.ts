import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMarsStroke],svg[lucide-mars-stroke]',
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
  template: `<svg:path d="m14 6 4 4"></svg:path>
    <svg:path d="M17 3h4v4"></svg:path>
    <svg:path d="m21 3-7.75 7.75"></svg:path>
    <svg:circle cx="9" cy="15" r="6"></svg:circle>`,
})
export class LucideMarsStroke {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
