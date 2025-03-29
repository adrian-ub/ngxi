import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorOff],svg[lucide-monitor-off]',
  host: {
    class: 'lucide lucide-monitor-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
    <svg:path d="M22 15V5a2 2 0 0 0-2-2H9" />
    <svg:path d="M8 21h8" />
    <svg:path d="M12 17v4" />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideMonitorOff {}
