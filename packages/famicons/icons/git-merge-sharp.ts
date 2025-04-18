import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsGitMergeSharpIcon],svg[famicons-git-merge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 224a63.66 63.66 0 0 0-37.95 12.5L160 153.36v-2a64 64 0 1 0-64 0v209.25a64 64 0 1 0 64 0V223.46l160.41 71.69A64 64 0 1 0 384 224M128 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m256-128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitMergeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
