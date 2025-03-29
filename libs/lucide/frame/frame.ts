import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFrame],svg[lucide-frame]',
  host: {
    class: 'lucide lucide-frame',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="22" x2="2" y1="6" y2="6" />
    <svg:line x1="22" x2="2" y1="18" y2="18" />
    <svg:line x1="6" x2="6" y1="2" y2="22" />
    <svg:line x1="18" x2="18" y1="2" y2="22" />
  `,
})
export class LucideFrame {}
