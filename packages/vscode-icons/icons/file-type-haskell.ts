import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeHaskellIcon],svg[vscode-icons-file-type-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#453a62" d="M2 25.882L8.588 16L2 6.118h4.941L13.529 16l-6.588 9.882z"></svg:path><svg:path fill="#5e5086" d="M8.588 25.882L15.177 16L8.588 6.118h4.941l13.177 19.764h-4.941l-4.118-6.176l-4.118 6.176z"></svg:path><svg:path fill="#8f4e8b" d="m24.51 20.118l-2.196-3.294L30 16.823v3.295zm-3.294-4.941l-2.196-3.294L30 11.882v3.295z"></svg:path>`,
})
export class VscodeIconsFileTypeHaskellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
