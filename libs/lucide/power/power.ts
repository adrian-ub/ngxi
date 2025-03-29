import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePower],svg[lucide-power]',
  host: {
    class: 'lucide lucide-power',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v10" />
    <svg:path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
  `,
})
export class LucidePower {}
