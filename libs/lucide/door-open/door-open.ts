import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDoorOpen],svg[lucide-door-open]',
  host: {
    class: 'lucide lucide-door-open',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 4h3a2 2 0 0 1 2 2v14" />
    <svg:path d="M2 20h3" />
    <svg:path d="M13 20h9" />
    <svg:path d="M10 12v.01" />
    <svg:path
      d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
    />
  `,
})
export class LucideDoorOpen {}
