import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeNpmIcon],svg[vscode-icons-file-type-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c12127" d="M2 2h28v28H2"></svg:path><svg:path fill="#fff" d="M7.25 7.25h17.5v17.5h-3.5v-14H16v14H7.25"></svg:path>`,
})
export class VscodeIconsFileTypeNpmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
