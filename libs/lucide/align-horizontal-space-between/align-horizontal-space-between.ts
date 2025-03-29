import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignHorizontalSpaceBetween],svg[lucide-align-horizontal-space-between]',
  host: {
    class: 'lucide lucide-align-horizontal-space-between',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="6" height="14" x="3" y="5" rx="2" />
    <svg:rect width="6" height="10" x="15" y="7" rx="2" />
    <svg:path d="M3 2v20" />
    <svg:path d="M21 2v20" />
  `,
})
export class LucideAlignHorizontalSpaceBetween {}
