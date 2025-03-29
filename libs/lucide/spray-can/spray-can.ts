import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSprayCan],svg[lucide-spray-can]',
  host: {
    class: 'lucide lucide-spray-can',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3h.01" />
    <svg:path d="M7 5h.01" />
    <svg:path d="M11 7h.01" />
    <svg:path d="M3 7h.01" />
    <svg:path d="M7 9h.01" />
    <svg:path d="M3 11h.01" />
    <svg:rect width="4" height="4" x="15" y="5" />
    <svg:path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
    <svg:path d="m13 14 8-2" />
    <svg:path d="m13 19 8-2" />
  `,
})
export class LucideSprayCan {}
