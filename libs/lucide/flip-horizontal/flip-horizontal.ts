import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlipHorizontal],svg[lucide-flip-horizontal]',
  host: {
    class: 'lucide lucide-flip-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
    <svg:path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
    <svg:path d="M12 20v2" />
    <svg:path d="M12 14v2" />
    <svg:path d="M12 8v2" />
    <svg:path d="M12 2v2" />
  `,
})
export class LucideFlipHorizontal {}
