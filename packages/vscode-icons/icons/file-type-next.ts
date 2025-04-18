import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeNextIcon],svg[vscode-icons-file-type-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeNext0" x1="336.1" x2="414.1" y1="522.5" y2="652.6" gradientTransform="translate(-8.06 -1.06)scale(.055)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeNext1" x1="511.1" x2="511.1" y1="209.5" y2="359.9" gradientTransform="translate(-8.06 -1.06)scale(.055)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs><svg:circle cx="16" cy="16" r="13.5" stroke="#fff"></svg:circle><svg:path fill="url(#vscodeIconsFileTypeNext0)" d="m25.26 26.5l-12.5-16.1H10.4v11.2h1.89v-8.8l11.49 14.84c.52-.35 1-.72 1.48-1.13z"></svg:path><svg:path fill="url(#vscodeIconsFileTypeNext1)" d="M19.89 10.4h1.86v11.2H19.9z"></svg:path>`,
})
export class VscodeIconsFileTypeNextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
