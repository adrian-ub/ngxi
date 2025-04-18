import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiReceiptIcon],svg[zmdi-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 323v-43H64v43zm0-86v-42H64v42zm0-85v-43H64v43zM0 429V3l32 32L64 3l32 32l32-32l32 32l32-32l32 32l32-32l32 32l32-32l32 32l32-32v426l-32-32l-32 32l-32-32l-32 32l-32-32l-32 32l-32-32l-32 32l-32-32l-32 32l-32-32z"></svg:path>`,
})
export class ZmdiReceiptIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
