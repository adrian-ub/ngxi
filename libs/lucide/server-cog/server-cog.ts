import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideServerCog],svg[lucide-server-cog]',
  host: {
    class: 'lucide lucide-server-cog',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="3" />
    <svg:path
      d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
    />
    <svg:path
      d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
    />
    <svg:path d="M6 6h.01" />
    <svg:path d="M6 18h.01" />
    <svg:path d="m15.7 13.4-.9-.3" />
    <svg:path d="m9.2 10.9-.9-.3" />
    <svg:path d="m10.6 15.7.3-.9" />
    <svg:path d="m13.6 15.7-.4-1" />
    <svg:path d="m10.8 9.3-.4-1" />
    <svg:path d="m8.3 13.6 1-.4" />
    <svg:path d="m14.7 10.8 1-.4" />
    <svg:path d="m13.4 8.3-.3.9" />
  `,
})
export class LucideServerCog {}
