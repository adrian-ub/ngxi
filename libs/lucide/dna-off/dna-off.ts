import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDnaOff],svg[lucide-dna-off]',
  host: {
    class: 'lucide lucide-dna-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
    <svg:path d="m17 6-2.891-2.891" />
    <svg:path d="M2 15c3.333-3 6.667-3 10-3" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="m20 9 .891.891" />
    <svg:path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
    <svg:path d="M3.109 14.109 4 15" />
    <svg:path d="m6.5 12.5 1 1" />
    <svg:path d="m7 18 2.891 2.891" />
    <svg:path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
  `,
})
export class LucideDnaOff {}
