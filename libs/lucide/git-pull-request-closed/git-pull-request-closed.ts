import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideGitPullRequestClosed],svg[lucide-git-pull-request-closed]',
  host: {
    class: 'lucide lucide-git-pull-request-closed',
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
    <svg:path d="m21 3-6 6" />
    <svg:path d="m21 9-6-6" />
    <svg:path d="M18 11.5V15" />
    <svg:circle cx="18" cy="18" r="3" />
  `,
})
export class LucideGitPullRequestClosed {}
