import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDraftingCompass],svg[lucide-drafting-compass]',
  host: {
    class: 'lucide lucide-drafting-compass',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m12.99 6.74 1.93 3.44" />
    <svg:path d="M19.136 12a10 10 0 0 1-14.271 0" />
    <svg:path d="m21 21-2.16-3.84" />
    <svg:path d="m3 21 8.02-14.26" />
    <svg:circle cx="12" cy="5" r="2" />
  `,
})
export class LucideDraftingCompass {}
