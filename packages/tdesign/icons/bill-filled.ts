import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBillFilledIcon],svg[tdesign-bill-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v2h2v18.08l3.466-2.772l2.284 2.03l2.25-2l2.25 2l2.284-2.03L20 22.08V4h2V2zm14 7H8V7h8zm-7 4v-2h6v2z"></svg:path>`,
})
export class TdesignBillFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
