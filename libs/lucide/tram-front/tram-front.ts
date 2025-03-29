import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTramFront],svg[lucide-tram-front]',
  host: {
    class: 'lucide lucide-tram-front',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="16" x="4" y="3" rx="2" />
    <svg:path d="M4 11h16" />
    <svg:path d="M12 3v8" />
    <svg:path d="m8 19-2 3" />
    <svg:path d="m18 22-2-3" />
    <svg:path d="M8 15h.01" />
    <svg:path d="M16 15h.01" />
  `,
})
export class LucideTramFront {}
