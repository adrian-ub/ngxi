import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampCeiling],svg[lucide-lamp-ceiling]',
  host: {
    class: 'lucide lucide-lamp-ceiling',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v5" />
    <svg:path d="M6 7h12l4 9H2l4-9Z" />
    <svg:path d="M9.17 16a3 3 0 1 0 5.66 0" />
  `,
})
export class LucideLampCeiling {}
