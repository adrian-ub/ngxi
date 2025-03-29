import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSmartphoneCharging],svg[lucide-smartphone-charging]',
  host: {
    class: 'lucide lucide-smartphone-charging',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <svg:path d="M12.667 8 10 12h4l-2.667 4" />
  `,
})
export class LucideSmartphoneCharging {}
