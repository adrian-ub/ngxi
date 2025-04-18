import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaSmartphoneOutlineIcon],svg[eva-smartphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"></svg:path><svg:circle cx="12" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaSmartphoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
