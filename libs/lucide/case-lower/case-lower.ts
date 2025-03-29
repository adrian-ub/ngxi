import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaseLower],svg[lucide-case-lower]',
  host: {
    class: 'lucide lucide-case-lower',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="7" cy="12" r="3" />
    <svg:path d="M10 9v6" />
    <svg:circle cx="17" cy="12" r="3" />
    <svg:path d="M14 7v8" />
  `,
})
export class LucideCaseLower {}
