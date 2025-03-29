import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderCode],svg[lucide-folder-code]',
  host: {
    class: 'lucide lucide-folder-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 10.5 8 13l2 2.5" />
    <svg:path d="m14 10.5 2 2.5-2 2.5" />
    <svg:path
      d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
    />
  `,
})
export class LucideFolderCode {}
