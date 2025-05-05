import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGitIcon],svg[picon-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8L0 4l2-2l1 1v3h1V4l1 1l1-1l-3-3l1-1l4 4"></svg:path>`,
})
export class PiconGitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
