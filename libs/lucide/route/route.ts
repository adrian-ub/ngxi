import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRoute],svg[lucide-route]',
  host: {
    class: 'lucide lucide-route',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="6" cy="19" r="3" />
    <svg:path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <svg:circle cx="18" cy="5" r="3" />
  `,
})
export class LucideRoute {}
