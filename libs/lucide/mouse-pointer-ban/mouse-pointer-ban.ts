import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMousePointerBan],svg[lucide-mouse-pointer-ban]',
  host: {
    class: 'lucide lucide-mouse-pointer-ban',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
    />
    <svg:circle cx="16" cy="16" r="6" />
    <svg:path d="m11.8 11.8 8.4 8.4" />
  `,
})
export class LucideMousePointerBan {}
