import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiShoppingCartIcon],svg[zmdi-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 344q18 0 30.5 12.5t12.5 30t-12.5 30T128 429t-30-12.5t-12-30t12-30t30-12.5M0 3h70l20 42h315q9 0 15.5 6.5T427 67q0 5-3 10l-76 138q-12 22-38 22H151l-19 35v3q0 5 5 5h247v43H128q-18 0-30.5-12.5T85 280q0-11 6-20l28-53L43 45H0zm341.5 341q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5"></svg:path>`,
})
export class ZmdiShoppingCartIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
