import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCreditCardFill12Icon],svg[garden-credit-card-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1H1c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1M1 5V3h10v2z"></svg:path>`,
})
export class GardenCreditCardFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
