import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeater],svg[lucide-heater]',
  host: {
    class: 'lucide lucide-heater',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 8c2-3-2-3 0-6" />
    <svg:path d="M15.5 8c2-3-2-3 0-6" />
    <svg:path d="M6 10h.01" />
    <svg:path d="M6 14h.01" />
    <svg:path d="M10 16v-4" />
    <svg:path d="M14 16v-4" />
    <svg:path d="M18 16v-4" />
    <svg:path
      d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"
    />
    <svg:path d="M5 20v2" />
    <svg:path d="M19 20v2" />
  `,
})
export class LucideHeater {}
