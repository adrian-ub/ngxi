import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePoundSterling],svg[lucide-pound-sterling]',
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
  template: `<svg:path d="M18 7c0-5.333-8-5.333-8 0"></svg:path>
    <svg:path d="M10 7v14"></svg:path>
    <svg:path d="M6 21h12"></svg:path>
    <svg:path d="M6 13h10"></svg:path>`,
})
export class LucidePoundSterling {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
