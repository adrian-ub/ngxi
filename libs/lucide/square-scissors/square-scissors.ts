import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareScissors],svg[lucide-square-scissors]',
  host: {
    class: 'lucide lucide-square-scissors',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="20" x="2" y="2" rx="2" />
    <svg:circle cx="8" cy="8" r="2" />
    <svg:path d="M9.414 9.414 12 12" />
    <svg:path d="M14.8 14.8 18 18" />
    <svg:circle cx="8" cy="16" r="2" />
    <svg:path d="m18 6-8.586 8.586" />
  `,
})
export class LucideSquareScissors {}
