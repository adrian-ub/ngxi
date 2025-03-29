import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGlobe],svg[lucide-globe]',
  host: {
    class: 'lucide lucide-globe',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <svg:path d="M2 12h20" />
  `,
})
export class LucideGlobe {}
