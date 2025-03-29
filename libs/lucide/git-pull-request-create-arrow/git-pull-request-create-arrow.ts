import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideGitPullRequestCreateArrow],svg[lucide-git-pull-request-create-arrow]',
  host: {
    class: 'lucide lucide-git-pull-request-create-arrow',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="5" cy="6" r="3" />
    <svg:path d="M5 9v12" />
    <svg:path d="m15 9-3-3 3-3" />
    <svg:path d="M12 6h5a2 2 0 0 1 2 2v3" />
    <svg:path d="M19 15v6" />
    <svg:path d="M22 18h-6" />
  `,
})
export class LucideGitPullRequestCreateArrow {}
