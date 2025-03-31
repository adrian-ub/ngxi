import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUsb],svg[lucide-usb]',
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
  template: `<svg:circle cx="10" cy="7" r="1"></svg:circle>
    <svg:circle cx="4" cy="20" r="1"></svg:circle>
    <svg:path d="M4.7 19.3 19 5"></svg:path>
    <svg:path d="m21 3-3 1 2 2Z"></svg:path>
    <svg:path d="M9.26 7.68 5 12l2 5"></svg:path>
    <svg:path d="m10 14 5 2 3.5-3.5"></svg:path>
    <svg:path d="m18 12 1-1 1 1-1 1Z"></svg:path>`,
})
export class LucideUsb {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
