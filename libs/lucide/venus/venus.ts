import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVenus],svg[lucide-venus]',
  host: {
    class: 'lucide lucide-venus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 15v7" />
    <svg:path d="M9 19h6" />
    <svg:circle cx="12" cy="9" r="6" />
  `,
})
export class LucideVenus {}
