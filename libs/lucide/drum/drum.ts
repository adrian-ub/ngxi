import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDrum],svg[lucide-drum]',
  host: {
    class: 'lucide lucide-drum',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m2 2 8 8" />
    <svg:path d="m22 2-8 8" />
    <svg:ellipse cx="12" cy="9" rx="10" ry="5" />
    <svg:path d="M7 13.4v7.9" />
    <svg:path d="M12 14v8" />
    <svg:path d="M17 13.4v7.9" />
    <svg:path d="M2 9v8a10 5 0 0 0 20 0V9" />
  `,
})
export class LucideDrum {}
