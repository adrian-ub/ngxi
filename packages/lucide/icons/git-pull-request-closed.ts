import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequestClosedIcon],svg[lucide-git-pull-request-closed-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="6" r="3"></svg:circle><svg:path d="M6 9v12M21 3l-6 6m6 0l-6-6m3 8.5V15"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle></svg:g>`,
})
export class LucideGitPullRequestClosedIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
