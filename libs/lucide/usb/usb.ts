import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUsb],svg[lucide-usb]',
  host: {
    class: 'lucide lucide-usb',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="10" cy="7" r="1" />
    <svg:circle cx="4" cy="20" r="1" />
    <svg:path d="M4.7 19.3 19 5" />
    <svg:path d="m21 3-3 1 2 2Z" />
    <svg:path d="M9.26 7.68 5 12l2 5" />
    <svg:path d="m10 14 5 2 3.5-3.5" />
    <svg:path d="m18 12 1-1 1 1-1 1Z" />
  `,
})
export class LucideUsb {}
