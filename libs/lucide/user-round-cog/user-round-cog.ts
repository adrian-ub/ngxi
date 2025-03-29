import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundCog],svg[lucide-user-round-cog]',
  host: {
    class: 'lucide lucide-user-round-cog',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 21a8 8 0 0 1 10.434-7.62" />
    <svg:circle cx="10" cy="8" r="5" />
    <svg:circle cx="18" cy="18" r="3" />
    <svg:path d="m19.5 14.3-.4.9" />
    <svg:path d="m16.9 20.8-.4.9" />
    <svg:path d="m21.7 19.5-.9-.4" />
    <svg:path d="m15.2 16.9-.9-.4" />
    <svg:path d="m21.7 16.5-.9.4" />
    <svg:path d="m15.2 19.1-.9.4" />
    <svg:path d="m19.5 21.7-.4-.9" />
    <svg:path d="m16.9 15.2-.4-.9" />
  `,
})
export class LucideUserRoundCog {}
