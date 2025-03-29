import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRefrigerator],svg[lucide-refrigerator]',
  host: {
    class: 'lucide lucide-refrigerator',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
    />
    <svg:path d="M5 10h14" />
    <svg:path d="M15 7v6" />
  `,
})
export class LucideRefrigerator {}
