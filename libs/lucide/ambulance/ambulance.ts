import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAmbulance],svg[lucide-ambulance]',
  host: {
    class: 'lucide lucide-ambulance',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 10H6" />
    <svg:path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <svg:path
      d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
    />
    <svg:path d="M8 8v4" />
    <svg:path d="M9 18h6" />
    <svg:circle cx="17" cy="18" r="2" />
    <svg:circle cx="7" cy="18" r="2" />
  `,
})
export class LucideAmbulance {}
