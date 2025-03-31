import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorX],svg[lucide-monitor-x]',
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
  template: `<svg:path d="m14.5 12.5-5-5"></svg:path>
    <svg:path d="m9.5 12.5 5-5"></svg:path>
    <svg:rect width="20" height="14" x="2" y="3" rx="2"></svg:rect>
    <svg:path d="M12 17v4"></svg:path>
    <svg:path d="M8 21h8"></svg:path>`,
})
export class LucideMonitorX {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
