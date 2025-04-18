import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCreditCardStroke16Icon],svg[garden-credit-card-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="15" height="11" x=".5" y="2.5" fill="none" stroke="currentColor" rx=".5" ry=".5"></svg:rect><svg:path fill="currentColor" d="M.5 5h15v2H.5z"></svg:path>`,
})
export class GardenCreditCardStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
