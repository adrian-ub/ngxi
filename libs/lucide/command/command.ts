import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCommand],svg[lucide-command]',
  host: {
    class: 'lucide lucide-command',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
    />
  `,
})
export class LucideCommand {}
