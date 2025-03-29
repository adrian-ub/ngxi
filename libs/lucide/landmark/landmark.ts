import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLandmark],svg[lucide-landmark]',
  host: {
    class: 'lucide lucide-landmark',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="3" x2="21" y1="22" y2="22" />
    <svg:line x1="6" x2="6" y1="18" y2="11" />
    <svg:line x1="10" x2="10" y1="18" y2="11" />
    <svg:line x1="14" x2="14" y1="18" y2="11" />
    <svg:line x1="18" x2="18" y1="18" y2="11" />
    <svg:polygon points="12 2 20 7 4 7" />
  `,
})
export class LucideLandmark {}
