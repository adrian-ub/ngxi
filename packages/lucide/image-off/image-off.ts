import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImageOff],svg[lucide-image-off]',
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
  template: `<svg:line x1="2" x2="22" y1="2" y2="22"></svg:line>
    <svg:path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"></svg:path>
    <svg:line x1="13.5" x2="6" y1="13.5" y2="21"></svg:line>
    <svg:line x1="18" x2="21" y1="12" y2="15"></svg:line>
    <svg:path
      d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
    ></svg:path>
    <svg:path d="M21 15V5a2 2 0 0 0-2-2H9"></svg:path>`,
})
export class LucideImageOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
