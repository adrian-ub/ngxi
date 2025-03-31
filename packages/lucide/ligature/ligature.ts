import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLigature],svg[lucide-ligature]',
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
  template: `<svg:path d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"></svg:path>
    <svg:path d="M6 12h4"></svg:path>
    <svg:path d="M14 12h2v8"></svg:path>
    <svg:path d="M6 20h4"></svg:path>
    <svg:path d="M14 20h4"></svg:path>`,
})
export class LucideLigature {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
