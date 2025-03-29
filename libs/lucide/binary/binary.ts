import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBinary],svg[lucide-binary]',
  host: {
    class: 'lucide lucide-binary',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="14" y="14" width="4" height="6" rx="2" />
    <svg:rect x="6" y="4" width="4" height="6" rx="2" />
    <svg:path d="M6 20h4" />
    <svg:path d="M14 10h4" />
    <svg:path d="M6 14h2v6" />
    <svg:path d="M14 4h2v6" />
  `,
})
export class LucideBinary {}
