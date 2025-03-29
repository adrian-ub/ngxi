import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBetweenVerticalEnd],svg[lucide-between-vertical-end]',
  host: {
    class: 'lucide lucide-between-vertical-end',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="7" height="13" x="3" y="3" rx="1" />
    <svg:path d="m9 22 3-3 3 3" />
    <svg:rect width="7" height="13" x="14" y="3" rx="1" />
  `,
})
export class LucideBetweenVerticalEnd {}
