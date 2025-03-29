import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalDistributeStart],svg[lucide-align-vertical-distribute-start]',
  host: {
    class: 'lucide lucide-align-vertical-distribute-start',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="6" x="5" y="14" rx="2" />
    <svg:rect width="10" height="6" x="7" y="4" rx="2" />
    <svg:path d="M2 14h20" />
    <svg:path d="M2 4h20" />
  `,
})
export class LucideAlignVerticalDistributeStart {}
