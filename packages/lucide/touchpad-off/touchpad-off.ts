import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTouchpadOff],svg[lucide-touchpad-off]',
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
  template: `<svg:path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"></svg:path>
    <svg:path d="M2 14h12"></svg:path>
    <svg:path d="M22 14h-2"></svg:path>
    <svg:path d="M12 20v-6"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M22 16V6a2 2 0 0 0-2-2H10"></svg:path>`,
})
export class LucideTouchpadOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
