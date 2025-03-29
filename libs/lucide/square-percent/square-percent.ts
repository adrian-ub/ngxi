import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePercent],svg[lucide-square-percent]',
  host: {
    class: 'lucide lucide-square-percent',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m15 9-6 6" />
    <svg:path d="M9 9h.01" />
    <svg:path d="M15 15h.01" />
  `,
})
export class LucideSquarePercent {}
