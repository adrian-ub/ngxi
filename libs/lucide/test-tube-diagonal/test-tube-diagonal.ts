import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTestTubeDiagonal],svg[lucide-test-tube-diagonal]',
  host: {
    class: 'lucide lucide-test-tube-diagonal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"
    />
    <svg:path d="m16 2 6 6" />
    <svg:path d="M12 16H4" />
  `,
})
export class LucideTestTubeDiagonal {}
