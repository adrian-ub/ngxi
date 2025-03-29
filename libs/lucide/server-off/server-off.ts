import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideServerOff],svg[lucide-server-off]',
  host: {
    class: 'lucide lucide-server-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
    <svg:path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
    <svg:path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
    <svg:path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
    <svg:path d="M6 18h.01" />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideServerOff {}
