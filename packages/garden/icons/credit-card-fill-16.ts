import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCreditCardFill16Icon],svg[garden-credit-card-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M1 7V5h14v2z"></svg:path>`,
})
export class GardenCreditCardFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
