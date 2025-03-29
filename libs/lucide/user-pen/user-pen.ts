import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserPen],svg[lucide-user-pen]',
  host: {
    class: 'lucide lucide-user-pen',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
    <svg:path
      d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    />
    <svg:circle cx="10" cy="7" r="4" />
  `,
})
export class LucideUserPen {}
