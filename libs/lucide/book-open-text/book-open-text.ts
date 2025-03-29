import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookOpenText],svg[lucide-book-open-text]',
  host: {
    class: 'lucide lucide-book-open-text',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 7v14" />
    <svg:path d="M16 12h2" />
    <svg:path d="M16 8h2" />
    <svg:path
      d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
    />
    <svg:path d="M6 12h2" />
    <svg:path d="M6 8h2" />
  `,
})
export class LucideBookOpenText {}
