import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRadioReceiver],svg[lucide-radio-receiver]',
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
  template: `<svg:path d="M5 16v2"></svg:path>
    <svg:path d="M19 16v2"></svg:path>
    <svg:rect width="20" height="8" x="2" y="8" rx="2"></svg:rect>
    <svg:path d="M18 12h.01"></svg:path>`,
})
export class LucideRadioReceiver {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
