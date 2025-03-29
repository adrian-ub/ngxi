import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTriangleAlert],svg[lucide-triangle-alert]',
  host: {
    class: 'lucide lucide-triangle-alert',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
    />
    <svg:path d="M12 9v4" />
    <svg:path d="M12 17h.01" />
  `,
})
export class LucideTriangleAlert {}
