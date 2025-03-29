import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlaskConical],svg[lucide-flask-conical]',
  host: {
    class: 'lucide lucide-flask-conical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
    />
    <svg:path d="M6.453 15h11.094" />
    <svg:path d="M8.5 2h7" />
  `,
})
export class LucideFlaskConical {}
