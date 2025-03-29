import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePlug],svg[lucide-plug]',
  host: {
    class: 'lucide lucide-plug',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 22v-5" />
    <svg:path d="M9 8V2" />
    <svg:path d="M15 8V2" />
    <svg:path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
  `,
})
export class LucidePlug {}
