import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCigaretteOff],svg[lucide-cigarette-off]',
  host: {
    class: 'lucide lucide-cigarette-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
    <svg:path d="M18 8c0-2.5-2-2.5-2-5" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
    <svg:path d="M22 8c0-2.5-2-2.5-2-5" />
    <svg:path d="M7 12v4" />
  `,
})
export class LucideCigaretteOff {}
