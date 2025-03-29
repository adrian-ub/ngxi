import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClub],svg[lucide-club]',
  host: {
    class: 'lucide lucide-club',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
    />
    <svg:path d="M12 17.66L12 22" />
  `,
})
export class LucideClub {}
