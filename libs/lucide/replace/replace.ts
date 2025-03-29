import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReplace],svg[lucide-replace]',
  host: {
    class: 'lucide lucide-replace',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 4a2 2 0 0 1 2-2" />
    <svg:path d="M16 10a2 2 0 0 1-2-2" />
    <svg:path d="M20 2a2 2 0 0 1 2 2" />
    <svg:path d="M22 8a2 2 0 0 1-2 2" />
    <svg:path d="m3 7 3 3 3-3" />
    <svg:path d="M6 10V5a3 3 0 0 1 3-3h1" />
    <svg:rect x="2" y="14" width="8" height="8" rx="2" />
  `,
})
export class LucideReplace {}
