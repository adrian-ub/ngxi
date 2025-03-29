import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSignpostBig],svg[lucide-signpost-big]',
  host: {
    class: 'lucide lucide-signpost-big',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 9H4L2 7l2-2h6" />
    <svg:path d="M14 5h6l2 2-2 2h-6" />
    <svg:path d="M10 22V4a2 2 0 1 1 4 0v18" />
    <svg:path d="M8 22h8" />
  `,
})
export class LucideSignpostBig {}
