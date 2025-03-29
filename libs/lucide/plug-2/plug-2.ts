import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePlug2],svg[lucide-plug-2]',
  host: {
    class: 'lucide lucide-plug-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 2v6" />
    <svg:path d="M15 2v6" />
    <svg:path d="M12 17v5" />
    <svg:path d="M5 8h14" />
    <svg:path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
  `,
})
export class LucidePlug2 {}
