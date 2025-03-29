import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFolderSymlink],svg[lucide-folder-symlink]',
  host: {
    class: 'lucide lucide-folder-symlink',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
    />
    <svg:path d="m8 16 3-3-3-3" />
  `,
})
export class LucideFolderSymlink {}
