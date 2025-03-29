import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBed],svg[lucide-bed]',
  host: {
    class: 'lucide lucide-bed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 4v16" />
    <svg:path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <svg:path d="M2 17h20" />
    <svg:path d="M6 8v9" />
  `,
})
export class LucideBed {}
