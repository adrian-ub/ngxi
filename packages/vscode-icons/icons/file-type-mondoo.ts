import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeMondooIcon],svg[vscode-icons-file-type-mondoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6e45e2" d="M9.03 9.03A6.97 6.97 0 0 0 2.06 16a6.97 6.97 0 0 0 6.97 6.971zm0 6.97A6.97 6.97 0 0 0 16 22.971a6.97 6.97 0 0 0 6.971-6.97a6.97 6.97 0 0 0-6.97-6.972A6.97 6.97 0 0 0 9.028 16m13.942 0v6.97A6.97 6.97 0 0 0 29.94 16a6.97 6.97 0 0 0-6.968-6.97z"></svg:path>`,
})
export class VscodeIconsFileTypeMondooIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
