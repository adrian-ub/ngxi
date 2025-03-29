import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorStop],svg[lucide-monitor-stop]',
  host: {
    class: 'lucide lucide-monitor-stop',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 17v4" />
    <svg:path d="M8 21h8" />
    <svg:rect x="2" y="3" width="20" height="14" rx="2" />
    <svg:rect x="9" y="7" width="6" height="6" rx="1" />
  `,
})
export class LucideMonitorStop {}
