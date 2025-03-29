import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHdmiPort],svg[lucide-hdmi-port]',
  host: {
    class: 'lucide lucide-hdmi-port',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
    />
    <svg:path d="M7.5 12h9" />
  `,
})
export class LucideHdmiPort {}
