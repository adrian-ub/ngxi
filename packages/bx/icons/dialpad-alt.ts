import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDialpadAltIcon],svg[bx-dialpad-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxDialpadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
