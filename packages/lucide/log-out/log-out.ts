import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLogOut],svg[lucide-log-out]',
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
  template: `<svg:path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></svg:path>
    <svg:polyline points="16 17 21 12 16 7"></svg:polyline>
    <svg:line x1="21" x2="9" y1="12" y2="12"></svg:line>`,
})
export class LucideLogOut {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
