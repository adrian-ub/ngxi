import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHospital],svg[lucide-hospital]',
  host: {
    class: 'lucide lucide-hospital',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 6v4" />
    <svg:path d="M14 14h-4" />
    <svg:path d="M14 18h-4" />
    <svg:path d="M14 8h-4" />
    <svg:path
      d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"
    />
    <svg:path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
  `,
})
export class LucideHospital {}
