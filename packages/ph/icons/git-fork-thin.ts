import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitForkThinIcon],svg[ph-git-fork-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 64a28 28 0 1 0-32 27.71V112a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V91.71a28 28 0 1 0-8 0V112a20 20 0 0 0 20 20h44v32.29a28 28 0 1 0 8 0V132h44a20 20 0 0 0 20-20V91.71A28 28 0 0 0 220 64M44 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m104 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m44-108a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitForkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
