import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSun],svg[lucide-sun]',
  host: {
    class: 'lucide lucide-sun',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="4" />
    <svg:path d="M12 2v2" />
    <svg:path d="M12 20v2" />
    <svg:path d="m4.93 4.93 1.41 1.41" />
    <svg:path d="m17.66 17.66 1.41 1.41" />
    <svg:path d="M2 12h2" />
    <svg:path d="M20 12h2" />
    <svg:path d="m6.34 17.66-1.41 1.41" />
    <svg:path d="m19.07 4.93-1.41 1.41" />
  `,
})
export class LucideSun {}
