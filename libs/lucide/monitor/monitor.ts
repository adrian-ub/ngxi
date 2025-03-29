import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitor],svg[lucide-monitor]',
  host: {
    class: 'lucide lucide-monitor',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="14" x="2" y="3" rx="2" />
    <svg:line x1="8" x2="16" y1="21" y2="21" />
    <svg:line x1="12" x2="12" y1="17" y2="21" />
  `,
})
export class LucideMonitor {}
