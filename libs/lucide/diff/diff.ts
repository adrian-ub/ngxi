import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDiff],svg[lucide-diff]',
  host: {
    class: 'lucide lucide-diff',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 3v14" />
    <svg:path d="M5 10h14" />
    <svg:path d="M5 21h14" />
  `,
})
export class LucideDiff {}
