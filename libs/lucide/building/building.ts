import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBuilding],svg[lucide-building]',
  host: {
    class: 'lucide lucide-building',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <svg:path d="M9 22v-4h6v4" />
    <svg:path d="M8 6h.01" />
    <svg:path d="M16 6h.01" />
    <svg:path d="M12 6h.01" />
    <svg:path d="M12 10h.01" />
    <svg:path d="M12 14h.01" />
    <svg:path d="M16 10h.01" />
    <svg:path d="M16 14h.01" />
    <svg:path d="M8 10h.01" />
    <svg:path d="M8 14h.01" />
  `,
})
export class LucideBuilding {}
