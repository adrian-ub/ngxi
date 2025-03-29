import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEclipse],svg[lucide-eclipse]',
  host: {
    class: 'lucide lucide-eclipse',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M12 2a7 7 0 1 0 10 10" />
  `,
})
export class LucideEclipse {}
