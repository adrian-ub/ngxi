import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSnowflake],svg[lucide-snowflake]',
  host: {
    class: 'lucide lucide-snowflake',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m10 20-1.25-2.5L6 18" />
    <svg:path d="M10 4 8.75 6.5 6 6" />
    <svg:path d="m14 20 1.25-2.5L18 18" />
    <svg:path d="m14 4 1.25 2.5L18 6" />
    <svg:path d="m17 21-3-6h-4" />
    <svg:path d="m17 3-3 6 1.5 3" />
    <svg:path d="M2 12h6.5L10 9" />
    <svg:path d="m20 10-1.5 2 1.5 2" />
    <svg:path d="M22 12h-6.5L14 15" />
    <svg:path d="m4 10 1.5 2L4 14" />
    <svg:path d="m7 21 3-6-1.5-3" />
    <svg:path d="m7 3 3 6h4" />
  `,
})
export class LucideSnowflake {}
