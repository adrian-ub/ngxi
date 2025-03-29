import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideToyBrick],svg[lucide-toy-brick]',
  host: {
    class: 'lucide lucide-toy-brick',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="12" x="3" y="8" rx="1" />
    <svg:path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
    <svg:path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
  `,
})
export class LucideToyBrick {}
