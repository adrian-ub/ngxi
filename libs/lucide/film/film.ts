import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFilm],svg[lucide-film]',
  host: {
    class: 'lucide lucide-film',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M7 3v18" />
    <svg:path d="M3 7.5h4" />
    <svg:path d="M3 12h18" />
    <svg:path d="M3 16.5h4" />
    <svg:path d="M17 3v18" />
    <svg:path d="M17 7.5h4" />
    <svg:path d="M17 16.5h4" />
  `,
})
export class LucideFilm {}
