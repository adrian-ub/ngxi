import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGitCommitHorizontalIcon],svg[lucide-git-commit-horizontal-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M3 12h6m6 0h6"></svg:path></svg:g>`,
})
export class LucideGitCommitHorizontalIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
