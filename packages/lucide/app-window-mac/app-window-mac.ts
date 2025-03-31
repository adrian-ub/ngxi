import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAppWindowMac],svg[lucide-app-window-mac]',
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
  template: `<svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect>
    <svg:path d="M6 8h.01"></svg:path>
    <svg:path d="M10 8h.01"></svg:path>
    <svg:path d="M14 8h.01"></svg:path>`,
})
export class LucideAppWindowMac {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
