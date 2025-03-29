import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTelescope],svg[lucide-telescope]',
  host: {
    class: 'lucide lucide-telescope',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
    />
    <svg:path d="m13.56 11.747 4.332-.924" />
    <svg:path d="m16 21-3.105-6.21" />
    <svg:path
      d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
    />
    <svg:path d="m6.158 8.633 1.114 4.456" />
    <svg:path d="m8 21 3.105-6.21" />
    <svg:circle cx="12" cy="13" r="2" />
  `,
})
export class LucideTelescope {}
