import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLockKeyhole],svg[lucide-lock-keyhole]',
  host: {
    class: 'lucide lucide-lock-keyhole',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="16" r="1" />
    <svg:rect x="3" y="10" width="18" height="12" rx="2" />
    <svg:path d="M7 10V7a5 5 0 0 1 10 0v3" />
  `,
})
export class LucideLockKeyhole {}
