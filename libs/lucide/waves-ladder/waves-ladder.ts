import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWavesLadder],svg[lucide-waves-ladder]',
  host: {
    class: 'lucide lucide-waves-ladder',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 5a2 2 0 0 0-2 2v11" />
    <svg:path
      d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    />
    <svg:path d="M7 13h10" />
    <svg:path d="M7 9h10" />
    <svg:path d="M9 5a2 2 0 0 0-2 2v11" />
  `,
})
export class LucideWavesLadder {}
