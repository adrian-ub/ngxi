import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalSpaceBetween],svg[lucide-align-vertical-space-between]',
  host: {
    class: 'lucide lucide-align-vertical-space-between',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="6" x="5" y="15" rx="2" />
    <svg:rect width="10" height="6" x="7" y="3" rx="2" />
    <svg:path d="M2 21h20" />
    <svg:path d="M2 3h20" />
  `,
})
export class LucideAlignVerticalSpaceBetween {}
