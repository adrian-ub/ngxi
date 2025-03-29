import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBellElectric],svg[lucide-bell-electric]',
  host: {
    class: 'lucide lucide-bell-electric',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18.8 4A6.3 8.7 0 0 1 20 9" />
    <svg:path d="M9 9h.01" />
    <svg:circle cx="9" cy="9" r="7" />
    <svg:rect width="10" height="6" x="4" y="16" rx="2" />
    <svg:path d="M14 19c3 0 4.6-1.6 4.6-1.6" />
    <svg:circle cx="20" cy="16" r="2" />
  `,
})
export class LucideBellElectric {}
