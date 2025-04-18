import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGitMergeIcon],svg[hugeicons-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7.022 8.279v7.128m7.39-3.403H10.02c-1.098 0-3.158-.88-3.001-3.224" color="currentColor"></svg:path>`,
})
export class HugeiconsGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
