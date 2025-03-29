import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePipette],svg[lucide-pipette]',
  host: {
    class: 'lucide lucide-pipette',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m2 22 1-1h3l9-9" />
    <svg:path d="M3 21v-3l9-9" />
    <svg:path
      d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
    />
  `,
})
export class LucidePipette {}
