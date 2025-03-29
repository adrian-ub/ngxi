import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFireExtinguisher],svg[lucide-fire-extinguisher]',
  host: {
    class: 'lucide lucide-fire-extinguisher',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
    <svg:path d="M9 18h8" />
    <svg:path d="M18 3h-3" />
    <svg:path d="M11 3a6 6 0 0 0-6 6v11" />
    <svg:path d="M5 13h4" />
    <svg:path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
  `,
})
export class LucideFireExtinguisher {}
