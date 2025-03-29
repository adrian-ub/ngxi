import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFiles],svg[lucide-files]',
  host: {
    class: 'lucide lucide-files',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20 7h-3a2 2 0 0 1-2-2V2" />
    <svg:path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
    <svg:path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
  `,
})
export class LucideFiles {}
