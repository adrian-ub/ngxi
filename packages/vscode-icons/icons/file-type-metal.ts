import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeMetalIcon],svg[vscode-icons-file-type-metal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#vscodeIconsFileTypeMetal0)" d="M24.4 30H7.6A5.6 5.6 0 0 1 2 24.4V7.6C2 4.508 4.508 2 7.6 2h16.8C27.492 2 30 4.508 30 7.6v16.8c0 3.092-2.508 5.6-5.6 5.6"></svg:path><svg:path fill="#000" d="M7.483 23.194V7.134l7.506 9.177V9.583l12.328 13.611h-3.19l-6.65-7.038l-.077 7.038l-7.428-9.177v9.177z"></svg:path><svg:defs><svg:lineargradient id="vscodeIconsFileTypeMetal0" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E94151"></svg:stop><svg:stop offset="1" stop-color="#4E0AC9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class VscodeIconsFileTypeMetalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
