import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRows2],svg[lucide-rows-2]',
  host: {
    class: 'lucide lucide-rows-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M3 12h18" />
  `,
})
export class LucideRows2 {}
