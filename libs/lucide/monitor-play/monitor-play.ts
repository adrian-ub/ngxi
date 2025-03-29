import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorPlay],svg[lucide-monitor-play]',
  host: {
    class: 'lucide lucide-monitor-play',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
    />
    <svg:path d="M12 17v4" />
    <svg:path d="M8 21h8" />
    <svg:rect x="2" y="3" width="20" height="14" rx="2" />
  `,
})
export class LucideMonitorPlay {}
