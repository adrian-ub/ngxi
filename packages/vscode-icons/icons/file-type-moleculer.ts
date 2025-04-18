import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeMoleculerIcon],svg[vscode-icons-file-type-moleculer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3cafce" d="M30 24.137a5.022 5.022 0 1 1-9.17-2.827l-2.669-2.538a4.047 4.047 0 0 1-6.136-1.452l-3.179 1.4a3.484 3.484 0 1 1-.454-1.1l3.308-1.212a4.074 4.074 0 0 1 3.991-4.962a4 4 0 0 1 1.248.215l1.672-3.169a2.828 2.828 0 1 1 .8.3L18 12.167a4.06 4.06 0 0 1 .971 5.784l2.851 2.308A5 5 0 0 1 30 24.137"></svg:path>`,
})
export class VscodeIconsFileTypeMoleculerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
