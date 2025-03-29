import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAnnoyed],svg[lucide-annoyed]',
  host: {
    class: 'lucide lucide-annoyed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M8 15h8" />
    <svg:path d="M8 9h2" />
    <svg:path d="M14 9h2" />
  `,
})
export class LucideAnnoyed {}
