import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitBranchThinIcon],svg[ph-git-branch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 64a28 28 0 1 0-32 27.71V112a12 12 0 0 1-12 12H96a19.9 19.9 0 0 0-12 4V91.71a28 28 0 1 0-8 0v72.58a28 28 0 1 0 8 0V144a12 12 0 0 1 12-12h88a20 20 0 0 0 20-20V91.71A28 28 0 0 0 228 64M60 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20M200 84a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitBranchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
