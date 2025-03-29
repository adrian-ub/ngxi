import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTentTree],svg[lucide-tent-tree]',
  host: {
    class: 'lucide lucide-tent-tree',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="4" cy="4" r="2" />
    <svg:path d="m14 5 3-3 3 3" />
    <svg:path d="m14 10 3-3 3 3" />
    <svg:path d="M17 14V2" />
    <svg:path d="M17 14H7l-5 8h20Z" />
    <svg:path d="M8 14v8" />
    <svg:path d="m9 14 5 8" />
  `,
})
export class LucideTentTree {}
