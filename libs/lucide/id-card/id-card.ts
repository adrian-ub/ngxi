import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIdCard],svg[lucide-id-card]',
  host: {
    class: 'lucide lucide-id-card',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 10h2" />
    <svg:path d="M16 14h2" />
    <svg:path d="M6.17 15a3 3 0 0 1 5.66 0" />
    <svg:circle cx="9" cy="11" r="2" />
    <svg:rect x="2" y="5" width="20" height="14" rx="2" />
  `,
})
export class LucideIdCard {}
