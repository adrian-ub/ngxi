import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBlinds],svg[lucide-blinds]',
  host: {
    class: 'lucide lucide-blinds',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3h18" />
    <svg:path d="M20 7H8" />
    <svg:path d="M20 11H8" />
    <svg:path d="M10 19h10" />
    <svg:path d="M8 15h12" />
    <svg:path d="M4 3v14" />
    <svg:circle cx="4" cy="19" r="2" />
  `,
})
export class LucideBlinds {}
