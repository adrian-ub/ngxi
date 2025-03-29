import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudMoon],svg[lucide-cloud-moon]',
  host: {
    class: 'lucide lucide-cloud-moon',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" />
    <svg:path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" />
  `,
})
export class LucideCloudMoon {}
