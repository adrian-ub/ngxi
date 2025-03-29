import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeadset],svg[lucide-headset]',
  host: {
    class: 'lucide lucide-headset',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
    />
    <svg:path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  `,
})
export class LucideHeadset {}
