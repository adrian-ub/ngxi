import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitCommitHorizontal],svg[lucide-git-commit-horizontal]',
  host: {
    class: 'lucide lucide-git-commit-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="3" />
    <svg:line x1="3" x2="9" y1="12" y2="12" />
    <svg:line x1="15" x2="21" y1="12" y2="12" />
  `,
})
export class LucideGitCommitHorizontal {}
