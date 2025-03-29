import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDatabaseZap],svg[lucide-database-zap]',
  host: {
    class: 'lucide lucide-database-zap',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:ellipse cx="12" cy="5" rx="9" ry="3" />
    <svg:path d="M3 5V19A9 3 0 0 0 15 21.84" />
    <svg:path d="M21 5V8" />
    <svg:path d="M21 12L18 17H22L19 22" />
    <svg:path d="M3 12A9 3 0 0 0 14.59 14.87" />
  `,
})
export class LucideDatabaseZap {}
