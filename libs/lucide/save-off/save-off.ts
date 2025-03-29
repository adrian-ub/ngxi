import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSaveOff],svg[lucide-save-off]',
  host: {
    class: 'lucide lucide-save-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 13H8a1 1 0 0 0-1 1v7" />
    <svg:path d="M14 8h1" />
    <svg:path d="M17 21v-4" />
    <svg:path d="m2 2 20 20" />
    <svg:path
      d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"
    />
    <svg:path d="M29.5 11.5s5 5 4 5" />
    <svg:path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" />
  `,
})
export class LucideSaveOff {}
