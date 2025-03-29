import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDelete],svg[lucide-delete]',
  host: {
    class: 'lucide lucide-delete',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
    />
    <svg:path d="m12 9 6 6" />
    <svg:path d="m18 9-6 6" />
  `,
})
export class LucideDelete {}
