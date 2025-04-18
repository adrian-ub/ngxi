import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTransferUpIcon],svg[mdi-transfer-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h8v2zm0-4v-2h8v2zm0-4v-2h8v2zm11-4H5l7-7z"></svg:path>`,
})
export class MdiTransferUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
