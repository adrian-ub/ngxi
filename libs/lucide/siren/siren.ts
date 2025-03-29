import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSiren],svg[lucide-siren]',
  host: {
    class: 'lucide lucide-siren',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 18v-6a5 5 0 1 1 10 0v6" />
    <svg:path
      d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
    />
    <svg:path d="M21 12h1" />
    <svg:path d="M18.5 4.5 18 5" />
    <svg:path d="M2 12h1" />
    <svg:path d="M12 2v1" />
    <svg:path d="m4.929 4.929.707.707" />
    <svg:path d="M12 12v6" />
  `,
})
export class LucideSiren {}
