import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignCenterVertical],svg[lucide-align-center-vertical]',
  host: {
    class: 'lucide lucide-align-center-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v20" />
    <svg:path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
    <svg:path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
    <svg:path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
    <svg:path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
  `,
})
export class LucideAlignCenterVertical {}
