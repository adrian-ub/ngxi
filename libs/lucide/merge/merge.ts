import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMerge],svg[lucide-merge]',
  host: {
    class: 'lucide lucide-merge',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m8 6 4-4 4 4" />
    <svg:path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
    <svg:path d="m20 22-5-5" />
  `,
})
export class LucideMerge {}
