import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMoreVerticalOutlineIcon],svg[eva-more-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="5" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="19" r="2" fill="currentColor"></svg:circle>`,
})
export class EvaMoreVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
