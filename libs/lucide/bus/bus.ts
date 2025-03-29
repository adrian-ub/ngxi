import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBus],svg[lucide-bus]',
  host: {
    class: 'lucide lucide-bus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 6v6" />
    <svg:path d="M15 6v6" />
    <svg:path d="M2 12h19.6" />
    <svg:path
      d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
    />
    <svg:circle cx="7" cy="18" r="2" />
    <svg:path d="M9 18h5" />
    <svg:circle cx="16" cy="18" r="2" />
  `,
})
export class LucideBus {}
