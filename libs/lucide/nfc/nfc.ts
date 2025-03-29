import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNfc],svg[lucide-nfc]',
  host: {
    class: 'lucide lucide-nfc',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
    <svg:path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
    <svg:path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
    <svg:path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
  `,
})
export class LucideNfc {}
