import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGitCommitVerticalIcon],svg[lucide-git-commit-vertical-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3v6"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M12 15v6"></svg:path></svg:g>`,
})
export class LucideGitCommitVerticalIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
