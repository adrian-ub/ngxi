import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookDown],svg[lucide-book-down]',
  host: {
    class: 'lucide lucide-book-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 13V7" />
    <svg:path
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    />
    <svg:path d="m9 10 3 3 3-3" />
  `,
})
export class LucideBookDown {}
