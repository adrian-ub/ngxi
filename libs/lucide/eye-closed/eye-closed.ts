import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEyeClosed],svg[lucide-eye-closed]',
  host: {
    class: 'lucide lucide-eye-closed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m15 18-.722-3.25" />
    <svg:path d="M2 8a10.645 10.645 0 0 0 20 0" />
    <svg:path d="m20 15-1.726-2.05" />
    <svg:path d="m4 15 1.726-2.05" />
    <svg:path d="m9 18 .722-3.25" />
  `,
})
export class LucideEyeClosed {}
