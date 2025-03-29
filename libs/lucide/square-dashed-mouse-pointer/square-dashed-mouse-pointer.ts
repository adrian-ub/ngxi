import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideSquareDashedMousePointer],svg[lucide-square-dashed-mouse-pointer]',
  host: {
    class: 'lucide lucide-square-dashed-mouse-pointer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
    />
    <svg:path d="M5 3a2 2 0 0 0-2 2" />
    <svg:path d="M19 3a2 2 0 0 1 2 2" />
    <svg:path d="M5 21a2 2 0 0 1-2-2" />
    <svg:path d="M9 3h1" />
    <svg:path d="M9 21h2" />
    <svg:path d="M14 3h1" />
    <svg:path d="M3 9v1" />
    <svg:path d="M21 9v2" />
    <svg:path d="M3 14v1" />
  `,
})
export class LucideSquareDashedMousePointer {}
