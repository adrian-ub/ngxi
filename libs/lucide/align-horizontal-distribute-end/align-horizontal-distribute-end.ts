import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignHorizontalDistributeEnd],svg[lucide-align-horizontal-distribute-end]',
  host: {
    class: 'lucide lucide-align-horizontal-distribute-end',
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
    <svg:path d="M10 2v20" />
    <svg:path d="M20 2v20" />
  `,
})
export class LucideAlignHorizontalDistributeEnd {}
