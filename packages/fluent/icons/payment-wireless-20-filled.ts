import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaymentWireless20FilledIcon],svg[fluent-payment-wireless-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m7.363-3.855a.514.514 0 0 0-.715 0a.487.487 0 0 0 0 .699a4.397 4.397 0 0 1 0 6.316a.487.487 0 0 0 0 .699a.514.514 0 0 0 .715 0a5.37 5.37 0 0 0 0-7.714M6.145 7.148a.515.515 0 0 0 0 .716a3.07 3.07 0 0 1 0 4.27a.515.515 0 0 0 0 .716a.486.486 0 0 0 .698 0c1.538-1.574 1.538-4.127 0-5.702a.486.486 0 0 0-.698 0m5.73-2.005a.533.533 0 0 0-.725 0a.47.47 0 0 0 0 .688c2.427 2.302 2.427 6.035 0 8.337c-.2.19-.2.498 0 .689s.525.19.726 0c2.827-2.683 2.827-7.032 0-9.714"></svg:path>`,
})
export class FluentPaymentWireless20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
