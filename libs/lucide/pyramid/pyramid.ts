import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePyramid],svg[lucide-pyramid]',
  host: {
    class: 'lucide lucide-pyramid',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
    />
    <svg:path d="M12 2v20" />
  `,
})
export class LucidePyramid {}
