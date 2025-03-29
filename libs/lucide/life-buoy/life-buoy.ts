import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLifeBuoy],svg[lucide-life-buoy]',
  host: {
    class: 'lucide lucide-life-buoy',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m4.93 4.93 4.24 4.24" />
    <svg:path d="m14.83 9.17 4.24-4.24" />
    <svg:path d="m14.83 14.83 4.24 4.24" />
    <svg:path d="m9.17 14.83-4.24 4.24" />
    <svg:circle cx="12" cy="12" r="4" />
  `,
})
export class LucideLifeBuoy {}
