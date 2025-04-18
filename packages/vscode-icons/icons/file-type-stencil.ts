import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeStencilIcon],svg[vscode-icons-file-type-stencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7b79ff" d="M30 12.849H7.83L2 19.151h22.17Zm-15.217-7.47h10.751l-5.806 6.3H8.968Zm-2.373 14.94H23.2l-5.833 6.3H6.634Z"></svg:path>`,
})
export class VscodeIconsFileTypeStencilIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
