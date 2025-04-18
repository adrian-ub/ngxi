import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBankTransferInIcon],svg[mdi-bank-transfer-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15v-3h3v-2l4 3.5L5 17v-2zm20-6.3V10H10V8.7L16 5zM10 17h12v2H10zm5-6h2v5h-2zm-4 0h2v5h-2zm8 0h2v5h-2z"></svg:path>`,
})
export class MdiBankTransferInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
