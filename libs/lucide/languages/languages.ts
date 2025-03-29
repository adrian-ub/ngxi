import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLanguages],svg[lucide-languages]',
  host: {
    class: 'lucide lucide-languages',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m5 8 6 6" />
    <svg:path d="m4 14 6-6 2-3" />
    <svg:path d="M2 5h12" />
    <svg:path d="M7 2h1" />
    <svg:path d="m22 22-5-10-5 10" />
    <svg:path d="M14 18h6" />
  `,
})
export class LucideLanguages {}
