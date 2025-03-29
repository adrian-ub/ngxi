import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderSearch],svg[lucide-folder-search]',
  host: {
    class: 'lucide lucide-folder-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
    />
    <svg:path d="m21 21-1.9-1.9" />
    <svg:circle cx="17" cy="17" r="3" />
  `,
})
export class LucideFolderSearch {}
