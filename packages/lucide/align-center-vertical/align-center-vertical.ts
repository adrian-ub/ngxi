import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignCenterVertical],svg[lucide-align-center-vertical]',
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
  template: `<svg:path d="M12 2v20"></svg:path>
    <svg:path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"></svg:path>
    <svg:path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"></svg:path>
    <svg:path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"></svg:path>
    <svg:path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"></svg:path>`,
})
export class LucideAlignCenterVertical {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
