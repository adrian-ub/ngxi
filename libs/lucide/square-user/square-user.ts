import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareUser],svg[lucide-square-user]',
  host: {
    class: 'lucide lucide-square-user',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:circle cx="12" cy="10" r="3" />
    <svg:path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
  `,
})
export class LucideSquareUser {}
