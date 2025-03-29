import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileBadge],svg[lucide-file-badge]',
  host: {
    class: 'lucide lucide-file-badge',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <svg:path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
  `,
})
export class LucideFileBadge {}
