import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLuggage],svg[lucide-luggage]',
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
      d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
    ></svg:path>
    <svg:path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></svg:path>
    <svg:path d="M10 20h4"></svg:path>
    <svg:circle cx="16" cy="20" r="2"></svg:circle>
    <svg:circle cx="8" cy="20" r="2"></svg:circle>`,
})
export class LucideLuggage {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
