import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStethoscope],svg[lucide-stethoscope]',
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
  template: `<svg:path d="M11 2v2"></svg:path>
    <svg:path d="M5 2v2"></svg:path>
    <svg:path
      d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"
    ></svg:path>
    <svg:path d="M8 15a6 6 0 0 0 12 0v-3"></svg:path>
    <svg:circle cx="20" cy="10" r="2"></svg:circle>`,
})
export class LucideStethoscope {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
