import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideColumns2],svg[lucide-columns-2]',
  host: {
    class: 'lucide lucide-columns-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M12 3v18" />
  `,
})
export class LucideColumns2 {}
