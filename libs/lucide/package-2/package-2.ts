import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePackage2],svg[lucide-package-2]',
  host: {
    class: 'lucide lucide-package-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <svg:path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
    <svg:path d="M12 3v6" />
  `,
})
export class LucidePackage2 {}
