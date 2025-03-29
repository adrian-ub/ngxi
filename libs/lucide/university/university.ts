import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUniversity],svg[lucide-university]',
  host: {
    class: 'lucide lucide-university',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="10" r="1" />
    <svg:path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
    <svg:path d="M6 17v.01" />
    <svg:path d="M6 13v.01" />
    <svg:path d="M18 17v.01" />
    <svg:path d="M18 13v.01" />
    <svg:path d="M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
  `,
})
export class LucideUniversity {}
