import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideGitPullRequestCreate],svg[lucide-git-pull-request-create]',
  host: {
    class: 'lucide lucide-git-pull-request-create',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="6" cy="6" r="3" />
    <svg:path d="M6 9v12" />
    <svg:path d="M13 6h3a2 2 0 0 1 2 2v3" />
    <svg:path d="M18 15v6" />
    <svg:path d="M21 18h-6" />
  `,
})
export class LucideGitPullRequestCreate {}
