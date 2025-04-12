import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequestCreateArrowIcon],svg[lucide-git-pull-request-create-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="5" cy="6" r="3"></svg:circle><svg:path d="M5 9v12M15 9l-3-3l3-3"></svg:path><svg:path d="M12 6h5a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"></svg:path></svg:g>`
})
export class LucideGitPullRequestCreateArrowIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
