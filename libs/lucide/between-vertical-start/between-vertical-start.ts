import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideBetweenVerticalStart],svg[lucide-between-vertical-start]',
  host: {
    class: 'lucide lucide-between-vertical-start',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="7" height="13" x="3" y="8" rx="1" />
    <svg:path d="m15 2-3 3-3-3" />
    <svg:rect width="7" height="13" x="14" y="8" rx="1" />
  `,
})
export class LucideBetweenVerticalStart {}
