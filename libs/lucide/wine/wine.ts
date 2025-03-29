import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWine],svg[lucide-wine]',
  host: {
    class: 'lucide lucide-wine',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 22h8" />
    <svg:path d="M7 10h10" />
    <svg:path d="M12 15v7" />
    <svg:path
      d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
    />
  `,
})
export class LucideWine {}
