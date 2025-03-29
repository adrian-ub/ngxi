import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChrome],svg[lucide-chrome]',
  host: {
    class: 'lucide lucide-chrome',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:circle cx="12" cy="12" r="4" />
    <svg:line x1="21.17" x2="12" y1="8" y2="8" />
    <svg:line x1="3.95" x2="8.54" y1="6.06" y2="14" />
    <svg:line x1="10.88" x2="15.46" y1="21.94" y2="14" />
  `,
})
export class LucideChrome {}
