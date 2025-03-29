import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScale3d],svg[lucide-scale-3d]',
  host: {
    class: 'lucide lucide-scale-3d',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 7v11a1 1 0 0 0 1 1h11" />
    <svg:path d="M5.293 18.707 11 13" />
    <svg:circle cx="19" cy="19" r="2" />
    <svg:circle cx="5" cy="5" r="2" />
  `,
})
export class LucideScale3d {}
