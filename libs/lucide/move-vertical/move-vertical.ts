import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveVertical],svg[lucide-move-vertical]',
  host: {
    class: 'lucide lucide-move-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v20" />
    <svg:path d="m8 18 4 4 4-4" />
    <svg:path d="m8 6 4-4 4 4" />
  `,
})
export class LucideMoveVertical {}
