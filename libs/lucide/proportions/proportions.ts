import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideProportions],svg[lucide-proportions]',
  host: {
    class: 'lucide lucide-proportions',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:path d="M12 9v11" />
    <svg:path d="M2 9h13a2 2 0 0 1 2 2v9" />
  `,
})
export class LucideProportions {}
