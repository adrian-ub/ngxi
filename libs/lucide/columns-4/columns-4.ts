import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideColumns4],svg[lucide-columns-4]',
  host: {
    class: 'lucide lucide-columns-4',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M7.5 3v18" />
    <svg:path d="M12 3v18" />
    <svg:path d="M16.5 3v18" />
  `,
})
export class LucideColumns4 {}
