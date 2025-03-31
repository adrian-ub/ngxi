import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorSmartphone],svg[lucide-monitor-smartphone]',
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
  template: `<svg:path
      d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"
    ></svg:path>
    <svg:path d="M10 19v-3.96 3.15"></svg:path>
    <svg:path d="M7 19h5"></svg:path>
    <svg:rect width="6" height="10" x="16" y="12" rx="2"></svg:rect>`,
})
export class LucideMonitorSmartphone {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
