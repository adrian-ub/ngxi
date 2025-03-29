import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBanknoteArrowDown],svg[lucide-banknote-arrow-down]',
  host: {
    class: 'lucide lucide-banknote-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
    <svg:path d="m16 19 3 3 3-3" />
    <svg:path d="M18 12h.01" />
    <svg:path d="M19 16v6" />
    <svg:path d="M6 12h.01" />
    <svg:circle cx="12" cy="12" r="2" />
  `,
})
export class LucideBanknoteArrowDown {}
