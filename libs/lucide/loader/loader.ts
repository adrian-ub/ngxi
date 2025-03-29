import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLoader],svg[lucide-loader]',
  host: {
    class: 'lucide lucide-loader',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v4" />
    <svg:path d="m16.2 7.8 2.9-2.9" />
    <svg:path d="M18 12h4" />
    <svg:path d="m16.2 16.2 2.9 2.9" />
    <svg:path d="M12 18v4" />
    <svg:path d="m4.9 19.1 2.9-2.9" />
    <svg:path d="M2 12h4" />
    <svg:path d="m4.9 4.9 2.9 2.9" />
  `,
})
export class LucideLoader {}
