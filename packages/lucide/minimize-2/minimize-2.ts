import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMinimize2],svg[lucide-minimize-2]',
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
  template: `<svg:polyline points="4 14 10 14 10 20"></svg:polyline>
    <svg:polyline points="20 10 14 10 14 4"></svg:polyline>
    <svg:line x1="14" x2="21" y1="10" y2="3"></svg:line>
    <svg:line x1="3" x2="10" y1="21" y2="14"></svg:line>`,
})
export class LucideMinimize2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
