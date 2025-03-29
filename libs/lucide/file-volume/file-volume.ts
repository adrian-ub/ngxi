import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileVolume],svg[lucide-file-volume]',
  host: {
    class: 'lucide lucide-file-volume',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 11a5 5 0 0 1 0 6" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path
      d="M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"
    />
    <svg:path
      d="M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"
    />
  `,
})
export class LucideFileVolume {}
