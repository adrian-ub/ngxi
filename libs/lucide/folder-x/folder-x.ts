import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderX],svg[lucide-folder-x]',
  host: {
    class: 'lucide lucide-folder-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    />
    <svg:path d="m9.5 10.5 5 5" />
    <svg:path d="m14.5 10.5-5 5" />
  `,
})
export class LucideFolderX {}
