import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideComputer],svg[lucide-computer]',
  host: {
    class: 'lucide lucide-computer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="8" x="5" y="2" rx="2" />
    <svg:rect width="20" height="8" x="2" y="14" rx="2" />
    <svg:path d="M6 18h2" />
    <svg:path d="M12 18h6" />
  `,
})
export class LucideComputer {}
