import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMouse],svg[lucide-mouse]',
  host: {
    class: 'lucide lucide-mouse',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="5" y="2" width="14" height="20" rx="7" />
    <svg:path d="M12 6v4" />
  `,
})
export class LucideMouse {}
