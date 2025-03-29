import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSuperscript],svg[lucide-superscript]',
  host: {
    class: 'lucide lucide-superscript',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m4 19 8-8" />
    <svg:path d="m12 19-8-8" />
    <svg:path
      d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
    />
  `,
})
export class LucideSuperscript {}
