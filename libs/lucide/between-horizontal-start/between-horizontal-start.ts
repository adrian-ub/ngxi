import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideBetweenHorizontalStart],svg[lucide-between-horizontal-start]',
  host: {
    class: 'lucide lucide-between-horizontal-start',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="13" height="7" x="8" y="3" rx="1" />
    <svg:path d="m2 9 3 3-3 3" />
    <svg:rect width="13" height="7" x="8" y="14" rx="1" />
  `,
})
export class LucideBetweenHorizontalStart {}
