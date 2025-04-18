import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightMailingIcon],svg[vscode-icons-file-type-light-mailing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="vscodeIconsFileTypeLightMailing0" width="22.34" height="8.56" x="4.83" y="21.4" maskUnits="userSpaceOnUse"><svg:path fill="#c4c4c4" d="M4.83 25.5h22.34v4.47H4.83z"></svg:path></svg:mask></svg:defs><svg:g fill-rule="evenodd" mask="url(#vscodeIconsFileTypeLightMailing0)"><svg:path d="M16 23.63a2.05 2.05 0 1 0 2 2.05a2 2 0 0 0-2-2.05m0-2.23a4.28 4.28 0 1 0 4.21 4.28A4.24 4.24 0 0 0 16 21.4"></svg:path><svg:path d="M23 23.63a2.05 2.05 0 1 0 2 2.05a2 2 0 0 0-2-2.05m0-2.23a4.28 4.28 0 1 0 4.21 4.28A4.24 4.24 0 0 0 23 21.4M9 23.63a2.05 2.05 0 1 0 2 2.05a2 2 0 0 0-2-2.05m0-2.23a4.28 4.28 0 1 0 4.21 4.28A4.24 4.24 0 0 0 9 21.4"></svg:path></svg:g><svg:circle cx="16" cy="12.65" r="10.61"></svg:circle>`,
})
export class VscodeIconsFileTypeLightMailingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
