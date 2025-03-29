import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHaze],svg[lucide-haze]',
  host: {
    class: 'lucide lucide-haze',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m5.2 6.2 1.4 1.4" />
    <svg:path d="M2 13h2" />
    <svg:path d="M20 13h2" />
    <svg:path d="m17.4 7.6 1.4-1.4" />
    <svg:path d="M22 17H2" />
    <svg:path d="M22 21H2" />
    <svg:path d="M16 13a4 4 0 0 0-8 0" />
    <svg:path d="M12 5V2.5" />
  `,
})
export class LucideHaze {}
