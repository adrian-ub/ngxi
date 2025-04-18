import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBankTransferIcon],svg[mdi-bank-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14v-3h3V9l4 3.5l-4 3.5v-2zm-1-6.3V9H2V7.7L8 4zM7 10h2v5H7zm-4 0h2v5H3zm10 0v2.5l-2 1.8V10zm-3.9 6l-.6.5l1.7 1.5H2v-2zm7.9-1v3h-3v2l-4-3.5l4-3.5v2z"></svg:path>`,
})
export class MdiBankTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
