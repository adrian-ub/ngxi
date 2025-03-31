import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDisc3],svg[lucide-disc-3]',
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
  template: `<svg:circle cx="12" cy="12" r="10"></svg:circle>
    <svg:path d="M6 12c0-1.7.7-3.2 1.8-4.2"></svg:path>
    <svg:circle cx="12" cy="12" r="2"></svg:circle>
    <svg:path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></svg:path>`,
})
export class LucideDisc3 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
