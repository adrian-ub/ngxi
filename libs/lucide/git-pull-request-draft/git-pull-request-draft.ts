import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequestDraft],svg[lucide-git-pull-request-draft]',
  host: {
    class: 'lucide lucide-git-pull-request-draft',
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
    <svg:path d="M18 6V5" />
    <svg:path d="M18 11v-1" />
    <svg:line x1="6" x2="6" y1="9" y2="21" />
  `,
})
export class LucideGitPullRequestDraft {}
