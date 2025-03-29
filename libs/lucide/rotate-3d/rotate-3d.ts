import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRotate3d],svg[lucide-rotate-3d]',
  host: {
    class: 'lucide lucide-rotate-3d',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
    />
    <svg:path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
    <svg:path
      d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
    />
  `,
})
export class LucideRotate3d {}
