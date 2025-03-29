import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTvMinimal],svg[lucide-tv-minimal]',
  host: {
    class: 'lucide lucide-tv-minimal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 21h10" />
    <svg:rect width="20" height="14" x="2" y="3" rx="2" />
  `,
})
export class LucideTvMinimal {}
