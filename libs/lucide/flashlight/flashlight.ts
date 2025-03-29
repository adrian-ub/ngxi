import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlashlight],svg[lucide-flashlight]',
  host: {
    class: 'lucide lucide-flashlight',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
    />
    <svg:line x1="6" x2="18" y1="6" y2="6" />
    <svg:line x1="12" x2="12" y1="12" y2="12" />
  `,
})
export class LucideFlashlight {}
