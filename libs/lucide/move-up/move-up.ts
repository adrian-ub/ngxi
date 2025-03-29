import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveUp],svg[lucide-move-up]',
  host: {
    class: 'lucide lucide-move-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 6L12 2L16 6" />
    <svg:path d="M12 2V22" />
  `,
})
export class LucideMoveUp {}
