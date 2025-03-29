import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArchiveX],svg[lucide-archive-x]',
  host: {
    class: 'lucide lucide-archive-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="5" x="2" y="3" rx="1" />
    <svg:path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    <svg:path d="m9.5 17 5-5" />
    <svg:path d="m9.5 12 5 5" />
  `,
})
export class LucideArchiveX {}
