import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudAlert],svg[lucide-cloud-alert]',
  host: {
    class: 'lucide lucide-cloud-alert',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 12v4" />
    <svg:path d="M12 20h.01" />
    <svg:path d="M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708" />
  `,
})
export class LucideCloudAlert {}
