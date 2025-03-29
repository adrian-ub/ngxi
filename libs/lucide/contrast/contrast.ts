import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContrast],svg[lucide-contrast]',
  host: {
    class: 'lucide lucide-contrast',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M12 18a6 6 0 0 0 0-12v12z" />
  `,
})
export class LucideContrast {}
