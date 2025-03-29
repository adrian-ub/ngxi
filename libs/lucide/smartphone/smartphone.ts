import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSmartphone],svg[lucide-smartphone]',
  host: {
    class: 'lucide lucide-smartphone',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <svg:path d="M12 18h.01" />
  `,
})
export class LucideSmartphone {}
