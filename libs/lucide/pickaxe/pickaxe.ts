import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePickaxe],svg[lucide-pickaxe]',
  host: {
    class: 'lucide lucide-pickaxe',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" />
    <svg:path
      d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"
    />
    <svg:path
      d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"
    />
    <svg:path
      d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"
    />
  `,
})
export class LucidePickaxe {}
