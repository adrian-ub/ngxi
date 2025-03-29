import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareLibrary],svg[lucide-square-library]',
  host: {
    class: 'lucide lucide-square-library',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M7 7v10" />
    <svg:path d="M11 7v10" />
    <svg:path d="m15 7 2 10" />
  `,
})
export class LucideSquareLibrary {}
