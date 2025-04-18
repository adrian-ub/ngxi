import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeKIcon],svg[vscode-icons-file-type-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f2994a" d="m14.035 21.961l-1.884 1.884v5.977H6.917V2h5.234v15.415l1.014-1.3l5.017-5.887h6.285l-7.082 8.169l7.7 11.429H19.07Z"></svg:path>`,
})
export class VscodeIconsFileTypeKIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
