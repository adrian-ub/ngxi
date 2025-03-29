import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRedo2],svg[lucide-redo-2]',
  host: {
    class: 'lucide lucide-redo-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m15 14 5-5-5-5" />
    <svg:path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
  `,
})
export class LucideRedo2 {}
