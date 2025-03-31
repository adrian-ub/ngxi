import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitor],svg[lucide-monitor]',
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
  template: `<svg:rect width="20" height="14" x="2" y="3" rx="2"></svg:rect>
    <svg:line x1="8" x2="16" y1="21" y2="21"></svg:line>
    <svg:line x1="12" x2="12" y1="17" y2="21"></svg:line>`,
})
export class LucideMonitor {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
