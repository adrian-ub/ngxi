import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequest],svg[lucide-git-pull-request]',
  host: {
    class: 'lucide lucide-git-pull-request',
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
    <svg:path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <svg:line x1="6" x2="6" y1="9" y2="21" />
  `,
})
export class LucideGitPullRequest {}
