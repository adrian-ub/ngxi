import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTouchpad],svg[lucide-touchpad]',
  host: {
    class: 'lucide lucide-touchpad',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:path d="M2 14h20" />
    <svg:path d="M12 20v-6" />
  `,
})
export class LucideTouchpad {}
