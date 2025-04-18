import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCicsTransactionServerZosIcon],svg[carbon-cics-transaction-server-zos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="28" cy="10" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 29h-7v-2h7c4.963 0 9-4.037 9-9v-4h2v4c0 6.065-4.935 11-11 11"></svg:path><svg:path fill="currentColor" d="M16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5m0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3"></svg:path><svg:circle cx="4" cy="22" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M5 18H3v-4C3 7.935 7.935 3 14 3h7v2h-7c-4.963 0-9 4.037-9 9z"></svg:path>`,
})
export class CarbonCicsTransactionServerZosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
