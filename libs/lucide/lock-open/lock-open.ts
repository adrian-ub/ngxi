import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLockOpen],svg[lucide-lock-open]',
  host: {
    class: 'lucide lucide-lock-open',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <svg:path d="M7 11V7a5 5 0 0 1 9.9-1" />
  `,
})
export class LucideLockOpen {}
