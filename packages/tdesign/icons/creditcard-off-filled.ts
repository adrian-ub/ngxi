import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCreditcardOffFilledIcon],svg[tdesign-creditcard-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004.59L2 .586L.586 2l1 1H1v6h6.586l2 2H1v10h18.586L22 23.414l1.41-1.41L2 .594zM9 17H4v-2h5zm14 1.766V11h-7.765zM13.234 9H23V3H7.234z"></svg:path>`,
})
export class TdesignCreditcardOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
