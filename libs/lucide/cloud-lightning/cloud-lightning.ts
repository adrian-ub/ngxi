import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudLightning],svg[lucide-cloud-lightning]',
  host: {
    class: 'lucide lucide-cloud-lightning',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
    <svg:path d="m13 12-3 5h4l-3 5" />
  `,
})
export class LucideCloudLightning {}
