import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTransferDownIcon],svg[mdi-transfer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3v2H8V3zm0 4v2H8V7zm0 4v2H8v-2zM5 15h14l-7 7z"></svg:path>`,
})
export class MdiTransferDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
