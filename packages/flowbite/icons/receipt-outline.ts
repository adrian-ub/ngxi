import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteReceiptOutlineIcon],svg[flowbite-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-6 4h6m-6 4h6M6 3v18l2-2l2 2l2-2l2 2l2-2l2 2V3l-2 2l-2-2l-2 2l-2-2l-2 2z"></svg:path>`,
})
export class FlowbiteReceiptOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
