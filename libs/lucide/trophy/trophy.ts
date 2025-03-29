import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrophy],svg[lucide-trophy]',
  host: {
    class: 'lucide lucide-trophy',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <svg:path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <svg:path d="M4 22h16" />
    <svg:path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <svg:path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <svg:path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  `,
})
export class LucideTrophy {}
