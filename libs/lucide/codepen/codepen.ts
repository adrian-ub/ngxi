import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCodepen],svg[lucide-codepen]',
  host: {
    class: 'lucide lucide-codepen',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <svg:line x1="12" x2="12" y1="22" y2="15.5" />
    <svg:polyline points="22 8.5 12 15.5 2 8.5" />
    <svg:polyline points="2 15.5 12 8.5 22 15.5" />
    <svg:line x1="12" x2="12" y1="2" y2="8.5" />
  `,
})
export class LucideCodepen {}
