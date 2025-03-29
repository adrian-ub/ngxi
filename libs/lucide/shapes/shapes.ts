import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShapes],svg[lucide-shapes]',
  host: {
    class: 'lucide lucide-shapes',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
    />
    <svg:rect x="3" y="14" width="7" height="7" rx="1" />
    <svg:circle cx="17.5" cy="17.5" r="3.5" />
  `,
})
export class LucideShapes {}
