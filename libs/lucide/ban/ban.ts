import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBan],svg[lucide-ban]',
  host: {
    class: 'lucide lucide-ban',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m4.9 4.9 14.2 14.2" />
  `,
})
export class LucideBan {}
