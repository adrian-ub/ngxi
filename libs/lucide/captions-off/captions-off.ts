import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaptionsOff],svg[lucide-captions-off]',
  host: {
    class: 'lucide lucide-captions-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
    <svg:path d="M17 11h-.5" />
    <svg:path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M7 11h4" />
    <svg:path d="M7 15h2.5" />
  `,
})
export class LucideCaptionsOff {}
