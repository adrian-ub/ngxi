import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTreeDeciduous],svg[lucide-tree-deciduous]',
  host: {
    class: 'lucide lucide-tree-deciduous',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
    />
    <svg:path d="M12 19v3" />
  `,
})
export class LucideTreeDeciduous {}
