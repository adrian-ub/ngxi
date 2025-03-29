import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquircle],svg[lucide-squircle]',
  host: {
    class: 'lucide lucide-squircle',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
  `,
})
export class LucideSquircle {}
