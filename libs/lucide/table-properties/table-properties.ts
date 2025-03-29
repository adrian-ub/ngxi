import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTableProperties],svg[lucide-table-properties]',
  host: {
    class: 'lucide lucide-table-properties',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 3v18" />
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M21 9H3" />
    <svg:path d="M21 15H3" />
  `,
})
export class LucideTableProperties {}
