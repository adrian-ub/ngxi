import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveDown],svg[lucide-move-down]',
  host: {
    class: 'lucide lucide-move-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 18L12 22L16 18" />
    <svg:path d="M12 2V22" />
  `,
})
export class LucideMoveDown {}
