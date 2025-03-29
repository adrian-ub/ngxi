import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVote],svg[lucide-vote]',
  host: {
    class: 'lucide lucide-vote',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m9 12 2 2 4-4" />
    <svg:path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
    <svg:path d="M22 19H2" />
  `,
})
export class LucideVote {}
