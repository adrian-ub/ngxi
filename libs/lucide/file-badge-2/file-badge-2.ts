import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileBadge2],svg[lucide-file-badge-2]',
  host: {
    class: 'lucide lucide-file-badge-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:circle cx="12" cy="10" r="3" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="m14 12.5 1 5.5-3-1-3 1 1-5.5" />
  `,
})
export class LucideFileBadge2 {}
