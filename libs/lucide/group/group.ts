import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGroup],svg[lucide-group]',
  host: {
    class: 'lucide lucide-group',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 7V5c0-1.1.9-2 2-2h2" />
    <svg:path d="M17 3h2c1.1 0 2 .9 2 2v2" />
    <svg:path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
    <svg:path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
    <svg:rect width="7" height="5" x="7" y="7" rx="1" />
    <svg:rect width="7" height="5" x="10" y="12" rx="1" />
  `,
})
export class LucideGroup {}
