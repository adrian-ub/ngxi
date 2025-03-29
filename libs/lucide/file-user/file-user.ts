import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileUser],svg[lucide-file-user]',
  host: {
    class: 'lucide lucide-file-user',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M15 18a3 3 0 1 0-6 0" />
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
    <svg:circle cx="12" cy="13" r="2" />
  `,
})
export class LucideFileUser {}
