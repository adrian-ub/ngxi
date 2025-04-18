import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRediffmailIcon],svg[arcticons-rediffmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.555 19.647V42.5H7.445V19.647m33.11 0L24 5.5L7.445 19.647"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.373 23.74c.47-5.671 5.223-10.125 11.012-10.125a11.025 11.025 0 0 1 10.947 9.644"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.555 19.647L24 31.073L7.445 19.647"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.1 24.92a4.566 4.566 0 0 1 4.552-4.553h0m-4.549 10.091V20.365"></svg:path>`,
})
export class ArcticonsRediffmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
