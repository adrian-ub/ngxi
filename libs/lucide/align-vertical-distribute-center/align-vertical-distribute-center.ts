import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalDistributeCenter],svg[lucide-align-vertical-distribute-center]',
  host: {
    class: 'lucide lucide-align-vertical-distribute-center',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 17h-3" />
    <svg:path d="M22 7h-5" />
    <svg:path d="M5 17H2" />
    <svg:path d="M7 7H2" />
    <svg:rect x="5" y="14" width="14" height="6" rx="2" />
    <svg:rect x="7" y="4" width="10" height="6" rx="2" />
  `,
})
export class LucideAlignVerticalDistributeCenter {}
