import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHouseWifi],svg[lucide-house-wifi]',
  host: {
    class: 'lucide lucide-house-wifi',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9.5 13.866a4 4 0 0 1 5 .01" />
    <svg:path d="M12 17h.01" />
    <svg:path
      d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    />
    <svg:path d="M7 10.754a8 8 0 0 1 10 0" />
  `,
})
export class LucideHouseWifi {}
