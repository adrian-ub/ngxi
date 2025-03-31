import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHardHat],svg[lucide-hard-hat]',
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
  template: `<svg:path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></svg:path>
    <svg:path d="M14 6a6 6 0 0 1 6 6v3"></svg:path>
    <svg:path d="M4 15v-3a6 6 0 0 1 6-6"></svg:path>
    <svg:rect x="2" y="15" width="20" height="4" rx="1"></svg:rect>`,
})
export class LucideHardHat {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
