import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBadgeJapaneseYen],svg[lucide-badge-japanese-yen]',
  host: {
    class: 'lucide lucide-badge-japanese-yen',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    />
    <svg:path d="m9 8 3 3v7" />
    <svg:path d="m12 11 3-3" />
    <svg:path d="M9 12h6" />
    <svg:path d="M9 16h6" />
  `,
})
export class LucideBadgeJapaneseYen {}
