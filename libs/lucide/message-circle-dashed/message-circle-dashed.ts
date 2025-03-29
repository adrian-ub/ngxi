import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleDashed],svg[lucide-message-circle-dashed]',
  host: {
    class: 'lucide lucide-message-circle-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" />
    <svg:path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" />
    <svg:path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" />
    <svg:path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" />
    <svg:path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" />
    <svg:path d="M3.5 17.5 2 22l4.5-1.5" />
    <svg:path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" />
    <svg:path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" />
  `,
})
export class LucideMessageCircleDashed {}
