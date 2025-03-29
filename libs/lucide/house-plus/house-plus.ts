import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHousePlus],svg[lucide-house-plus]',
  host: {
    class: 'lucide lucide-house-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"
    />
    <svg:path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <svg:path d="M15 6h6" />
    <svg:path d="M18 3v6" />
  `,
})
export class LucideHousePlus {}
