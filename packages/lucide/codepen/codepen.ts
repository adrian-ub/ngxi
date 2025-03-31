import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCodepen],svg[lucide-codepen]',
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
  template: `<svg:polygon
      points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
    ></svg:polygon>
    <svg:line x1="12" x2="12" y1="22" y2="15.5"></svg:line>
    <svg:polyline points="22 8.5 12 15.5 2 8.5"></svg:polyline>
    <svg:polyline points="2 15.5 12 8.5 22 15.5"></svg:polyline>
    <svg:line x1="12" x2="12" y1="2" y2="8.5"></svg:line>`,
})
export class LucideCodepen {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
