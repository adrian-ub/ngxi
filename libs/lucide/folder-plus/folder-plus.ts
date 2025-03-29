import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderPlus],svg[lucide-folder-plus]',
  host: {
    class: 'lucide lucide-folder-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 10v6" />
    <svg:path d="M9 13h6" />
    <svg:path
      d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    />
  `,
})
export class LucideFolderPlus {}
