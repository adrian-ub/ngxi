import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignHorizontalDistributeStart],svg[lucide-align-horizontal-distribute-start]',
  host: {
    class: 'lucide lucide-align-horizontal-distribute-start',
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
    <svg:path d="M4 2v20" />
    <svg:path d="M14 2v20" />
  `,
})
export class LucideAlignHorizontalDistributeStart {}
