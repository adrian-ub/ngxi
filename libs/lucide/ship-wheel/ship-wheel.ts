import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShipWheel],svg[lucide-ship-wheel]',
  host: {
    class: 'lucide lucide-ship-wheel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="8" />
    <svg:path d="M12 2v7.5" />
    <svg:path d="m19 5-5.23 5.23" />
    <svg:path d="M22 12h-7.5" />
    <svg:path d="m19 19-5.23-5.23" />
    <svg:path d="M12 14.5V22" />
    <svg:path d="M10.23 13.77 5 19" />
    <svg:path d="M9.5 12H2" />
    <svg:path d="M10.23 10.23 5 5" />
    <svg:circle cx="12" cy="12" r="2.5" />
  `,
})
export class LucideShipWheel {}
