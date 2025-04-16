import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGitBranchPlusIcon],svg[lucide-git-branch-plus-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3v12m12-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M15 6a9 9 0 0 0-9 9m12 0v6m3-3h-6"></svg:path></svg:g>`,
})
export class LucideGitBranchPlusIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
