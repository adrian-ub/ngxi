import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalSpaceAround],svg[lucide-align-vertical-space-around]',
  host: {
    class: 'lucide lucide-align-vertical-space-around',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="10" height="6" x="7" y="9" rx="2" />
    <svg:path d="M22 20H2" />
    <svg:path d="M22 4H2" />
  `,
})
export class LucideAlignVerticalSpaceAround {}
