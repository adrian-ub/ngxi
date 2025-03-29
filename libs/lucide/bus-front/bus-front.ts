import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBusFront],svg[lucide-bus-front]',
  host: {
    class: 'lucide lucide-bus-front',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 6 2 7" />
    <svg:path d="M10 6h4" />
    <svg:path d="m22 7-2-1" />
    <svg:rect width="16" height="16" x="4" y="3" rx="2" />
    <svg:path d="M4 11h16" />
    <svg:path d="M8 15h.01" />
    <svg:path d="M16 15h.01" />
    <svg:path d="M6 19v2" />
    <svg:path d="M18 21v-2" />
  `,
})
export class LucideBusFront {}
