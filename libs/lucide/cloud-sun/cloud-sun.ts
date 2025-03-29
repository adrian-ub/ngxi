import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudSun],svg[lucide-cloud-sun]',
  host: {
    class: 'lucide lucide-cloud-sun',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v2" />
    <svg:path d="m4.93 4.93 1.41 1.41" />
    <svg:path d="M20 12h2" />
    <svg:path d="m19.07 4.93-1.41 1.41" />
    <svg:path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
    <svg:path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
  `,
})
export class LucideCloudSun {}
