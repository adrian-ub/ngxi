import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStickyNote],svg[lucide-sticky-note]',
  host: {
    class: 'lucide lucide-sticky-note',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
    <svg:path d="M15 3v4a2 2 0 0 0 2 2h4" />
  `,
})
export class LucideStickyNote {}
