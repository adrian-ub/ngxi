import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLandmark],svg[lucide-landmark]',
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
  template: `<svg:line x1="3" x2="21" y1="22" y2="22"></svg:line>
    <svg:line x1="6" x2="6" y1="18" y2="11"></svg:line>
    <svg:line x1="10" x2="10" y1="18" y2="11"></svg:line>
    <svg:line x1="14" x2="14" y1="18" y2="11"></svg:line>
    <svg:line x1="18" x2="18" y1="18" y2="11"></svg:line>
    <svg:polygon points="12 2 20 7 4 7"></svg:polygon>`,
})
export class LucideLandmark {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
