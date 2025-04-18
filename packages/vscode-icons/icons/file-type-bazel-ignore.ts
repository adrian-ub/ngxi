import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeBazelIgnoreIcon],svg[vscode-icons-file-type-bazel-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#76d275" d="m9 2l7 7l-7 7l-7-7z"></svg:path><svg:path fill="#43a047" d="M2 9v7l7 7v-7z"></svg:path><svg:path fill="#76d275" d="m23 2l7 7l-7 7l-7-7z"></svg:path><svg:path fill="#43a047" d="M30 9v7l-7 7v-7zM16 9l7 7l-7 7l-7-7z"></svg:path><svg:path fill="#00701a" d="M16 23v7l-7-7v-7z"></svg:path><svg:path fill="#004300" d="m16 23l7-7v7l-7 7z"></svg:path><svg:path fill="#ff0027" d="M9 2L2 9v7l14 14l14-14V9l-7-7l-7 7z"></svg:path>`,
})
export class VscodeIconsFileTypeBazelIgnoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
