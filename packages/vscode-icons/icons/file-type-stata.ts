import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeStataIcon],svg[vscode-icons-file-type-stata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeStata0" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#8aa7c0"></svg:stop><svg:stop offset="1" stop-color="#3c6e8f"></svg:stop></svg:lineargradient></svg:defs><svg:rect width="28" height="28" x="2" y="2" fill="url(#vscodeIconsFileTypeStata0)" rx="1.556" ry="1.556"></svg:rect><svg:path fill="#fff" d="M13.171 6.015h5.756v5.756h-5.756zm7.155 0h5.756v5.756h-5.756zm0 7.156h5.756v5.756h-5.756zm-7.155 0h5.756v5.756h-5.756zm-7.156 0h5.756v5.756H6.015zm0 7.155h5.756v5.756H6.015zm7.156 0h5.756v5.756h-5.756z"></svg:path>`,
})
export class VscodeIconsFileTypeStataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
