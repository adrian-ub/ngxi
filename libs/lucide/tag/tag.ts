import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTag],svg[lucide-tag]',
  host: {
    class: 'lucide lucide-tag',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
    />
    <svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  `,
})
export class LucideTag {}
