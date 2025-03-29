import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorPause],svg[lucide-monitor-pause]',
  host: {
    class: 'lucide lucide-monitor-pause',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 13V7" />
    <svg:path d="M14 13V7" />
    <svg:rect width="20" height="14" x="2" y="3" rx="2" />
    <svg:path d="M12 17v4" />
    <svg:path d="M8 21h8" />
  `,
})
export class LucideMonitorPause {}
