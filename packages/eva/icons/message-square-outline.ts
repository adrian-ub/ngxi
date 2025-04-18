import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMessageSquareOutlineIcon],svg[eva-message-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="11" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class EvaMessageSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
