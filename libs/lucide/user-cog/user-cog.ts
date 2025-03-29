import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserCog],svg[lucide-user-cog]',
  host: {
    class: 'lucide lucide-user-cog',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="18" cy="15" r="3" />
    <svg:circle cx="9" cy="7" r="4" />
    <svg:path d="M10 15H6a4 4 0 0 0-4 4v2" />
    <svg:path d="m21.7 16.4-.9-.3" />
    <svg:path d="m15.2 13.9-.9-.3" />
    <svg:path d="m16.6 18.7.3-.9" />
    <svg:path d="m19.1 12.2.3-.9" />
    <svg:path d="m19.6 18.7-.4-1" />
    <svg:path d="m16.8 12.3-.4-1" />
    <svg:path d="m14.3 16.6 1-.4" />
    <svg:path d="m20.7 13.8 1-.4" />
  `,
})
export class LucideUserCog {}
