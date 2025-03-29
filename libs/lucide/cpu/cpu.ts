import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCpu],svg[lucide-cpu]',
  host: {
    class: 'lucide lucide-cpu',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="16" x="4" y="4" rx="2" />
    <svg:rect width="6" height="6" x="9" y="9" rx="1" />
    <svg:path d="M15 2v2" />
    <svg:path d="M15 20v2" />
    <svg:path d="M2 15h2" />
    <svg:path d="M2 9h2" />
    <svg:path d="M20 15h2" />
    <svg:path d="M20 9h2" />
    <svg:path d="M9 2v2" />
    <svg:path d="M9 20v2" />
  `,
})
export class LucideCpu {}
