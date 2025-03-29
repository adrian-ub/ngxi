import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTransgender],svg[lucide-transgender]',
  host: {
    class: 'lucide lucide-transgender',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 16v6" />
    <svg:path d="M14 20h-4" />
    <svg:path d="M18 2h4v4" />
    <svg:path d="m2 2 7.17 7.17" />
    <svg:path d="M2 5.355V2h3.357" />
    <svg:path d="m22 2-7.17 7.17" />
    <svg:path d="M8 5 5 8" />
    <svg:circle cx="12" cy="12" r="4" />
  `,
})
export class LucideTransgender {}
