import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorX],svg[lucide-monitor-x]',
  host: {
    class: 'lucide lucide-monitor-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m14.5 12.5-5-5" />
    <svg:path d="m9.5 12.5 5-5" />
    <svg:rect width="20" height="14" x="2" y="3" rx="2" />
    <svg:path d="M12 17v4" />
    <svg:path d="M8 21h8" />
  `,
})
export class LucideMonitorX {}
