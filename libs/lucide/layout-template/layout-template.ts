import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutTemplate],svg[lucide-layout-template]',
  host: {
    class: 'lucide lucide-layout-template',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="7" x="3" y="3" rx="1" />
    <svg:rect width="9" height="7" x="3" y="14" rx="1" />
    <svg:rect width="5" height="7" x="16" y="14" rx="1" />
  `,
})
export class LucideLayoutTemplate {}
