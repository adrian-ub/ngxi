import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTicketsPlane],svg[lucide-tickets-plane]',
  host: {
    class: 'lucide lucide-tickets-plane',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
    <svg:path d="m12 13.5 3.75.5" />
    <svg:path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
    <svg:path d="M6 10V8" />
    <svg:path d="M6 14v1" />
    <svg:path d="M6 19v2" />
    <svg:rect x="2" y="8" width="20" height="13" rx="2" />
  `,
})
export class LucideTicketsPlane {}
