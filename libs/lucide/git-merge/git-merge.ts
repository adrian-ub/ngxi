import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitMerge],svg[lucide-git-merge]',
  host: {
    class: 'lucide lucide-git-merge',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="18" cy="18" r="3" />
    <svg:circle cx="6" cy="6" r="3" />
    <svg:path d="M6 21V9a9 9 0 0 0 9 9" />
  `,
})
export class LucideGitMerge {}
