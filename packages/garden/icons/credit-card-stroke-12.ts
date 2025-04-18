import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCreditCardStroke12Icon],svg[garden-credit-card-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="11" height="9" x=".5" y="1.5" fill="none" stroke="currentColor" rx=".5" ry=".5"></svg:rect><svg:path fill="currentColor" d="M.5 3h11v2H.5z"></svg:path>`,
})
export class GardenCreditCardStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
