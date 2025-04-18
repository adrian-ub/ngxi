import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMoneyBillAltIcon],svg[la-money-bill-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v17h28V7zm4 2h20a2 2 0 0 0 2 2v9a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-9a2 2 0 0 0 2-2m9 2c0 1.439-.561 2-2 2v2c.776 0 1.437-.151 2-.412V20h2v-9zm-6.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 14m15 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 23.5 14"></svg:path>`,
})
export class LaMoneyBillAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
