import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSunDim],svg[lucide-sun-dim]',
  host: {
    class: 'lucide lucide-sun-dim',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="4" />
    <svg:path d="M12 4h.01" />
    <svg:path d="M20 12h.01" />
    <svg:path d="M12 20h.01" />
    <svg:path d="M4 12h.01" />
    <svg:path d="M17.657 6.343h.01" />
    <svg:path d="M17.657 17.657h.01" />
    <svg:path d="M6.343 17.657h.01" />
    <svg:path d="M6.343 6.343h.01" />
  `,
})
export class LucideSunDim {}
