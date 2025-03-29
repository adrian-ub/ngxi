import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAperture],svg[lucide-aperture]',
  host: {
    class: 'lucide lucide-aperture',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m14.31 8 5.74 9.94" />
    <svg:path d="M9.69 8h11.48" />
    <svg:path d="m7.38 12 5.74-9.94" />
    <svg:path d="M9.69 16 3.95 6.06" />
    <svg:path d="M14.31 16H2.83" />
    <svg:path d="m16.62 12-5.74 9.94" />
  `,
})
export class LucideAperture {}
