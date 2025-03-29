import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLaptopMinimalCheck],svg[lucide-laptop-minimal-check]',
  host: {
    class: 'lucide lucide-laptop-minimal-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 20h20" />
    <svg:path d="m9 10 2 2 4-4" />
    <svg:rect x="3" y="4" width="18" height="12" rx="2" />
  `,
})
export class LucideLaptopMinimalCheck {}
