import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBlocks],svg[lucide-blocks]',
  host: {
    class: 'lucide lucide-blocks',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="7" height="7" x="14" y="3" rx="1" />
    <svg:path
      d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
    />
  `,
})
export class LucideBlocks {}
