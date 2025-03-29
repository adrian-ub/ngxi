import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStrikethrough],svg[lucide-strikethrough]',
  host: {
    class: 'lucide lucide-strikethrough',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 4H9a3 3 0 0 0-2.83 4" />
    <svg:path d="M14 12a4 4 0 0 1 0 8H6" />
    <svg:line x1="4" x2="20" y1="12" y2="12" />
  `,
})
export class LucideStrikethrough {}
