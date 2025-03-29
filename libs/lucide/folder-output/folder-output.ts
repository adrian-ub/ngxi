import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderOutput],svg[lucide-folder-output]',
  host: {
    class: 'lucide lucide-folder-output',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
    />
    <svg:path d="M2 13h10" />
    <svg:path d="m5 10-3 3 3 3" />
  `,
})
export class LucideFolderOutput {}
