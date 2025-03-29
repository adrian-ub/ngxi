import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSunMedium],svg[lucide-sun-medium]',
  host: {
    class: 'lucide lucide-sun-medium',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="4" />
    <svg:path d="M12 3v1" />
    <svg:path d="M12 20v1" />
    <svg:path d="M3 12h1" />
    <svg:path d="M20 12h1" />
    <svg:path d="m18.364 5.636-.707.707" />
    <svg:path d="m6.343 17.657-.707.707" />
    <svg:path d="m5.636 5.636.707.707" />
    <svg:path d="m17.657 17.657.707.707" />
  `,
})
export class LucideSunMedium {}
