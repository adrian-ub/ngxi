import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTransferIcon],svg[mdi-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a2 2 0 0 0-2 2v4h2V6h8v3h-2.5l3.5 3.5L20.5 9H18V6a2 2 0 0 0-2-2zm-5 8v2h8v-2zm0 3v2h8v-2zm10 0v2h8v-2zM3 18v2h8v-2zm10 0v2h8v-2z"></svg:path>`,
})
export class MdiTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
