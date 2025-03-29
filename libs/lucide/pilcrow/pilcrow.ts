import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePilcrow],svg[lucide-pilcrow]',
  host: {
    class: 'lucide lucide-pilcrow',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 4v16" />
    <svg:path d="M17 4v16" />
    <svg:path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
  `,
})
export class LucidePilcrow {}
