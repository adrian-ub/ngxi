import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMapPlus],svg[lucide-map-plus]',
  host: {
    class: 'lucide lucide-map-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"
    />
    <svg:path d="M15 5.764V12" />
    <svg:path d="M18 15v6" />
    <svg:path d="M21 18h-6" />
    <svg:path d="M9 3.236v15" />
  `,
})
export class LucideMapPlus {}
