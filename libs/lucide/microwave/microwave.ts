import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMicrowave],svg[lucide-microwave]',
  host: {
    class: 'lucide lucide-microwave',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="15" x="2" y="4" rx="2" />
    <svg:rect width="8" height="7" x="6" y="8" rx="1" />
    <svg:path d="M18 8v7" />
    <svg:path d="M6 19v2" />
    <svg:path d="M18 19v2" />
  `,
})
export class LucideMicrowave {}
