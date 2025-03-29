import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStethoscope],svg[lucide-stethoscope]',
  host: {
    class: 'lucide lucide-stethoscope',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 2v2" />
    <svg:path d="M5 2v2" />
    <svg:path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
    <svg:path d="M8 15a6 6 0 0 0 12 0v-3" />
    <svg:circle cx="20" cy="10" r="2" />
  `,
})
export class LucideStethoscope {}
