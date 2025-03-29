import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitCommitVertical],svg[lucide-git-commit-vertical]',
  host: {
    class: 'lucide lucide-git-commit-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 3v6" />
    <svg:circle cx="12" cy="12" r="3" />
    <svg:path d="M12 15v6" />
  `,
})
export class LucideGitCommitVertical {}
