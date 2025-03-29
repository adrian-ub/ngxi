import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHotel],svg[lucide-hotel]',
  host: {
    class: 'lucide lucide-hotel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 22v-6.57" />
    <svg:path d="M12 11h.01" />
    <svg:path d="M12 7h.01" />
    <svg:path d="M14 15.43V22" />
    <svg:path d="M15 16a5 5 0 0 0-6 0" />
    <svg:path d="M16 11h.01" />
    <svg:path d="M16 7h.01" />
    <svg:path d="M8 11h.01" />
    <svg:path d="M8 7h.01" />
    <svg:rect x="4" y="2" width="16" height="20" rx="2" />
  `,
})
export class LucideHotel {}
