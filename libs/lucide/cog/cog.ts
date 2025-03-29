import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCog],svg[lucide-cog]',
  host: {
    class: 'lucide lucide-cog',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <svg:path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <svg:path d="M12 2v2" />
    <svg:path d="M12 22v-2" />
    <svg:path d="m17 20.66-1-1.73" />
    <svg:path d="M11 10.27 7 3.34" />
    <svg:path d="m20.66 17-1.73-1" />
    <svg:path d="m3.34 7 1.73 1" />
    <svg:path d="M14 12h8" />
    <svg:path d="M2 12h2" />
    <svg:path d="m20.66 7-1.73 1" />
    <svg:path d="m3.34 17 1.73-1" />
    <svg:path d="m17 3.34-1 1.73" />
    <svg:path d="m11 13.73-4 6.93" />
  `,
})
export class LucideCog {}
