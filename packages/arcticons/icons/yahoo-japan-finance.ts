import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYahooJapanFinanceIcon],svg[arcticons-yahoo-japan-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.833 40.21v2.29m0-37v20.135m12.334 6.275V42.5m0-37v9.346M6.253 40.836l7.219-15.958l5.658 10.687l7.723-19.58l5.389 13.113l9.524-21.91"></svg:path>`,
})
export class ArcticonsYahooJapanFinanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
