import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeCodekitIcon],svg[vscode-icons-file-type-codekit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14"></svg:circle><svg:path fill="#fff" d="m14.651 7.525l-.011-.011a1.556 1.556 0 0 0-2.2 0l-7.38 7.38a1.556 1.556 0 0 0 0 2.2l7.38 7.38a1.556 1.556 0 0 0 2.2 0l.011-.011a1.556 1.556 0 0 0 0-2.2L9.04 16.654a.933.933 0 0 1 0-1.32l5.61-5.609a1.556 1.556 0 0 0 .001-2.2m2.57-.006l.011-.011a1.556 1.556 0 0 1 2.2 0l7.38 7.38a1.556 1.556 0 0 1 0 2.2l-7.38 7.38a1.556 1.556 0 0 1-2.2 0l-.011-.011a1.556 1.556 0 0 1 0-2.2l5.611-5.609a.933.933 0 0 0 0-1.32l-5.611-5.609a1.556 1.556 0 0 1 0-2.2"></svg:path>`,
})
export class VscodeIconsFileTypeCodekitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
