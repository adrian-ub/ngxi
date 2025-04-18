import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCreditCard26Icon],svg[garden-credit-card-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H4a1.003 1.003 0 0 0-1 1v12a1.003 1.003 0 0 0 1 1h18a1.003 1.003 0 0 0 1-1V7a1.003 1.003 0 0 0-1-1m-1 6.5a.495.495 0 0 1-.5.5h-15a.495.495 0 0 1-.5-.5v-2a.495.495 0 0 1 .5-.5h15a.495.495 0 0 1 .5.5z"></svg:path>`,
})
export class GardenCreditCard26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
