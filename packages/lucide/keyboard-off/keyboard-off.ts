import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideKeyboardOff],svg[lucide-keyboard-off]',
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
  template: `<svg:path d="M 20 4 A2 2 0 0 1 22 6"></svg:path>
    <svg:path d="M 22 6 L 22 16.41"></svg:path>
    <svg:path d="M 7 16 L 16 16"></svg:path>
    <svg:path d="M 9.69 4 L 20 4"></svg:path>
    <svg:path d="M14 8h.01"></svg:path>
    <svg:path d="M18 8h.01"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>
    <svg:path d="M6 8h.01"></svg:path>
    <svg:path d="M8 12h.01"></svg:path>`,
})
export class LucideKeyboardOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
