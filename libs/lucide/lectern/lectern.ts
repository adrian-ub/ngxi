import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLectern],svg[lucide-lectern]',
  host: {
    class: 'lucide lucide-lectern',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
    />
    <svg:path d="M18 6V3a1 1 0 0 0-1-1h-3" />
    <svg:rect width="8" height="12" x="8" y="10" rx="1" />
  `,
})
export class LucideLectern {}
