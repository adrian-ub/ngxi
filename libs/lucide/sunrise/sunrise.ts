import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSunrise],svg[lucide-sunrise]',
  host: {
    class: 'lucide lucide-sunrise',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v8" />
    <svg:path d="m4.93 10.93 1.41 1.41" />
    <svg:path d="M2 18h2" />
    <svg:path d="M20 18h2" />
    <svg:path d="m19.07 10.93-1.41 1.41" />
    <svg:path d="M22 22H2" />
    <svg:path d="m8 6 4-4 4 4" />
    <svg:path d="M16 18a4 4 0 0 0-8 0" />
  `,
})
export class LucideSunrise {}
