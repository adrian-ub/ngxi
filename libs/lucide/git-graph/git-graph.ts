import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitGraph],svg[lucide-git-graph]',
  host: {
    class: 'lucide lucide-git-graph',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="5" cy="6" r="3" />
    <svg:path d="M5 9v6" />
    <svg:circle cx="5" cy="18" r="3" />
    <svg:path d="M12 3v18" />
    <svg:circle cx="19" cy="6" r="3" />
    <svg:path d="M16 15.7A9 9 0 0 0 19 9" />
  `,
})
export class LucideGitGraph {}
