import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorSmartphone],svg[lucide-monitor-smartphone]',
  host: {
    class: 'lucide lucide-monitor-smartphone',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
    <svg:path d="M10 19v-3.96 3.15" />
    <svg:path d="M7 19h5" />
    <svg:rect width="6" height="10" x="16" y="12" rx="2" />
  `,
})
export class LucideMonitorSmartphone {}
