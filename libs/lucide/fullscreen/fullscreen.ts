import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFullscreen],svg[lucide-fullscreen]',
  host: {
    class: 'lucide lucide-fullscreen',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <svg:path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <svg:path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <svg:path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <svg:rect width="10" height="8" x="7" y="8" rx="1" />
  `,
})
export class LucideFullscreen {}
