import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGamepad],svg[lucide-gamepad]',
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
  template: `<svg:line x1="6" x2="10" y1="12" y2="12"></svg:line>
    <svg:line x1="8" x2="8" y1="10" y2="14"></svg:line>
    <svg:line x1="15" x2="15.01" y1="13" y2="13"></svg:line>
    <svg:line x1="18" x2="18.01" y1="11" y2="11"></svg:line>
    <svg:rect width="20" height="12" x="2" y="6" rx="2"></svg:rect>`,
})
export class LucideGamepad {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
