import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLuggage],svg[lucide-luggage]',
  host: {
    class: 'lucide lucide-luggage',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
    />
    <svg:path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
    <svg:path d="M10 20h4" />
    <svg:circle cx="16" cy="20" r="2" />
    <svg:circle cx="8" cy="20" r="2" />
  `,
})
export class LucideLuggage {}
