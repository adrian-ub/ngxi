import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSyringe],svg[lucide-syringe]',
  host: {
    class: 'lucide lucide-syringe',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m18 2 4 4" />
    <svg:path d="m17 7 3-3" />
    <svg:path
      d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
    />
    <svg:path d="m9 11 4 4" />
    <svg:path d="m5 19-3 3" />
    <svg:path d="m14 4 6 6" />
  `,
})
export class LucideSyringe {}
