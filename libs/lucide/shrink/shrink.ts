import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShrink],svg[lucide-shrink]',
  host: {
    class: 'lucide lucide-shrink',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
    <svg:path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
    <svg:path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
    <svg:path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
  `,
})
export class LucideShrink {}
