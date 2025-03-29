import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTestTubes],svg[lucide-test-tubes]',
  host: {
    class: 'lucide lucide-test-tubes',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" />
    <svg:path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" />
    <svg:path d="M3 2h7" />
    <svg:path d="M14 2h7" />
    <svg:path d="M9 16H4" />
    <svg:path d="M20 16h-5" />
  `,
})
export class LucideTestTubes {}
