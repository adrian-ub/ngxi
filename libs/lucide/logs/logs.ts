import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLogs],svg[lucide-logs]',
  host: {
    class: 'lucide lucide-logs',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 12h8" />
    <svg:path d="M13 18h8" />
    <svg:path d="M13 6h8" />
    <svg:path d="M3 12h1" />
    <svg:path d="M3 18h1" />
    <svg:path d="M3 6h1" />
    <svg:path d="M8 12h1" />
    <svg:path d="M8 18h1" />
    <svg:path d="M8 6h1" />
  `,
})
export class LucideLogs {}
