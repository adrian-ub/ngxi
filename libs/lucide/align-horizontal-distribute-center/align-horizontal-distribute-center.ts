import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignHorizontalDistributeCenter],svg[lucide-align-horizontal-distribute-center]',
  host: {
    class: 'lucide lucide-align-horizontal-distribute-center',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="6" height="14" x="4" y="5" rx="2" />
    <svg:rect width="6" height="10" x="14" y="7" rx="2" />
    <svg:path d="M17 22v-5" />
    <svg:path d="M17 7V2" />
    <svg:path d="M7 22v-3" />
    <svg:path d="M7 5V2" />
  `,
})
export class LucideAlignHorizontalDistributeCenter {}
