import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideJapaneseYen],svg[lucide-japanese-yen]',
  host: {
    class: 'lucide lucide-japanese-yen',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
    <svg:path d="M6 15h12" />
    <svg:path d="M6 11h12" />
  `,
})
export class LucideJapaneseYen {}
