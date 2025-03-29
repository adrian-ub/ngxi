import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampFloor],svg[lucide-lamp-floor]',
  host: {
    class: 'lucide lucide-lamp-floor',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 2h6l3 7H6l3-7Z" />
    <svg:path d="M12 9v13" />
    <svg:path d="M9 22h6" />
  `,
})
export class LucideLampFloor {}
