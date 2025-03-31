import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSlidersHorizontal],svg[lucide-sliders-horizontal]',
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
  template: `<svg:line x1="21" x2="14" y1="4" y2="4"></svg:line>
    <svg:line x1="10" x2="3" y1="4" y2="4"></svg:line>
    <svg:line x1="21" x2="12" y1="12" y2="12"></svg:line>
    <svg:line x1="8" x2="3" y1="12" y2="12"></svg:line>
    <svg:line x1="21" x2="16" y1="20" y2="20"></svg:line>
    <svg:line x1="12" x2="3" y1="20" y2="20"></svg:line>
    <svg:line x1="14" x2="14" y1="2" y2="6"></svg:line>
    <svg:line x1="8" x2="8" y1="10" y2="14"></svg:line>
    <svg:line x1="16" x2="16" y1="18" y2="22"></svg:line>`,
})
export class LucideSlidersHorizontal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
