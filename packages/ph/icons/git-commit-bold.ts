import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitCommitBoldIcon],svg[ph-git-commit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 116h-57.21a60 60 0 0 0-117.58 0H12a12 12 0 0 0 0 24h57.21a60 60 0 0 0 117.58 0H244a12 12 0 0 0 0-24m-116 48a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhGitCommitBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
