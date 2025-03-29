import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLockKeyholeOpen],svg[lucide-lock-keyhole-open]',
  host: {
    class: 'lucide lucide-lock-keyhole-open',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="16" r="1" />
    <svg:rect width="18" height="12" x="3" y="10" rx="2" />
    <svg:path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
  `,
})
export class LucideLockKeyholeOpen {}
