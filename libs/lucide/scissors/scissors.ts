import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScissors],svg[lucide-scissors]',
  host: {
    class: 'lucide lucide-scissors',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="6" cy="6" r="3" />
    <svg:path d="M8.12 8.12 12 12" />
    <svg:path d="M20 4 8.12 15.88" />
    <svg:circle cx="6" cy="18" r="3" />
    <svg:path d="M14.8 14.8 20 20" />
  `,
})
export class LucideScissors {}
