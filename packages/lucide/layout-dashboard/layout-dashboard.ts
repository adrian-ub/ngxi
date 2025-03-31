import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutDashboard],svg[lucide-layout-dashboard]',
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
  template: `<svg:rect width="7" height="9" x="3" y="3" rx="1"></svg:rect>
    <svg:rect width="7" height="5" x="14" y="3" rx="1"></svg:rect>
    <svg:rect width="7" height="9" x="14" y="12" rx="1"></svg:rect>
    <svg:rect width="7" height="5" x="3" y="16" rx="1"></svg:rect>`,
})
export class LucideLayoutDashboard {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
