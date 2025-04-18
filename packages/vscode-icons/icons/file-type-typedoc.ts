import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTypedocIcon],svg[vscode-icons-file-type-typedoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b44cfe" d="M3 23V9l13-7v28z"></svg:path><svg:path fill="#9601fe" d="m3 9l13 7l13-7l-13-7z"></svg:path><svg:path fill="#99cbfe" d="m3 23l13-7v14z"></svg:path><svg:path fill="#0c364f" d="m29 9l-13 7v14l13-7z"></svg:path>`,
})
export class VscodeIconsFileTypeTypedocIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
