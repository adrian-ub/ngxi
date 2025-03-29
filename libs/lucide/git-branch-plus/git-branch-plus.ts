import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitBranchPlus],svg[lucide-git-branch-plus]',
  host: {
    class: 'lucide lucide-git-branch-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 3v12" />
    <svg:path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <svg:path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <svg:path d="M15 6a9 9 0 0 0-9 9" />
    <svg:path d="M18 15v6" />
    <svg:path d="M21 18h-6" />
  `,
})
export class LucideGitBranchPlus {}
