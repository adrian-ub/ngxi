import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolders],svg[lucide-folders]',
  host: {
    class: 'lucide lucide-folders',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
    />
    <svg:path d="M2 8v11a2 2 0 0 0 2 2h14" />
  `,
})
export class LucideFolders {}
