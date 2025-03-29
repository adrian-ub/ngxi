import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitBranch],svg[lucide-git-branch]',
  host: {
    class: 'lucide lucide-git-branch',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="6" x2="6" y1="3" y2="15" />
    <svg:circle cx="18" cy="6" r="3" />
    <svg:circle cx="6" cy="18" r="3" />
    <svg:path d="M18 9a9 9 0 0 1-9 9" />
  `,
})
export class LucideGitBranch {}
