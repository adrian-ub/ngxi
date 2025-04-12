import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequestCreateIcon],svg[lucide-git-pull-request-create-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="6" r="3"></svg:circle><svg:path d="M6 9v12m7-15h3a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"></svg:path></svg:g>`
})
export class LucideGitPullRequestCreateIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
