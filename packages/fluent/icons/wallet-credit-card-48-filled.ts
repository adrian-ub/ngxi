import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWalletCreditCard48FilledIcon],svg[fluent-wallet-credit-card-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.884 14h-3.172l1.75-2.241a.464.464 0 0 0-.08-.652l-4.014-3.136L29.658 14h-3.173l5.913-7.569L30.052 4.6a.464.464 0 0 0-.651.08L22.118 14H18.96l8.47-10.86a2.964 2.964 0 0 1 4.162-.511l8.33 6.508a2.964 2.964 0 0 1 .51 4.16zm-22.29-1.5l1.953-2.5H9.25A4.25 4.25 0 0 0 5 14.25v21.5A6.25 6.25 0 0 0 11.25 42h25.5A6.25 6.25 0 0 0 43 35.75v-13.5A6.25 6.25 0 0 0 36.75 16H9.25a1.75 1.75 0 1 1 0-3.5zM32.25 28h4.5a1.25 1.25 0 1 1 0 2.5h-4.5a1.25 1.25 0 1 1 0-2.5"></svg:path>`,
})
export class FluentWalletCreditCard48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
