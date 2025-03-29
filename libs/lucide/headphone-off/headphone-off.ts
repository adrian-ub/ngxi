import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeadphoneOff],svg[lucide-headphone-off]',
  host: {
    class: 'lucide lucide-headphone-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 14h-1.343" />
    <svg:path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
    <svg:path
      d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"
    />
  `,
})
export class LucideHeadphoneOff {}
