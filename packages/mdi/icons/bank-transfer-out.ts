import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBankTransferOutIcon],svg[mdi-bank-transfer-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v-3h3v-2l4 3.5l-4 3.5v-2zm-1-6.3V10H2V8.7L8 5zM2 17h12v2H2zm5-6h2v5H7zm-4 0h2v5H3zm8 0h2v5h-2z"></svg:path>`,
})
export class MdiBankTransferOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
