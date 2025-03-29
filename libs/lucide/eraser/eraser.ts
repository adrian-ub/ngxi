import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEraser],svg[lucide-eraser]',
  host: {
    class: 'lucide lucide-eraser',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
    />
    <svg:path d="M22 21H7" />
    <svg:path d="m5 11 9 9" />
  `,
})
export class LucideEraser {}
