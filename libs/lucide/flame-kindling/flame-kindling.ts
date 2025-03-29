import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlameKindling],svg[lucide-flame-kindling]',
  host: {
    class: 'lucide lucide-flame-kindling',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
    />
    <svg:path d="m5 22 14-4" />
    <svg:path d="m5 18 14 4" />
  `,
})
export class LucideFlameKindling {}
