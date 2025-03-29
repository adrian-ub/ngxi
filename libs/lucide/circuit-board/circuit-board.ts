import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircuitBoard],svg[lucide-circuit-board]',
  host: {
    class: 'lucide lucide-circuit-board',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M11 9h4a2 2 0 0 0 2-2V3" />
    <svg:circle cx="9" cy="9" r="2" />
    <svg:path d="M7 21v-4a2 2 0 0 1 2-2h4" />
    <svg:circle cx="15" cy="15" r="2" />
  `,
})
export class LucideCircuitBoard {}
