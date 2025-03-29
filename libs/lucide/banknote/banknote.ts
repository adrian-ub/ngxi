import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBanknote],svg[lucide-banknote]',
  host: {
    class: 'lucide lucide-banknote',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="12" x="2" y="6" rx="2" />
    <svg:circle cx="12" cy="12" r="2" />
    <svg:path d="M6 12h.01M18 12h.01" />
  `,
})
export class LucideBanknote {}
