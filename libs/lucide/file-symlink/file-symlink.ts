import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileSymlink],svg[lucide-file-symlink]',
  host: {
    class: 'lucide lucide-file-symlink',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m10 18 3-3-3-3" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path
      d="M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
    />
  `,
})
export class LucideFileSymlink {}
