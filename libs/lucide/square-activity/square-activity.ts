import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareActivity],svg[lucide-square-activity]',
  host: {
    class: 'lucide lucide-square-activity',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M17 12h-2l-2 5-2-10-2 5H7" />
  `,
})
export class LucideSquareActivity {}
