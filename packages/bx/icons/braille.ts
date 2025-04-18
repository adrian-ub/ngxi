import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBrailleIcon],svg[bx-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="7" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="15" cy="7" r="2" fill="currentColor"></svg:circle><svg:circle cx="15" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="15" cy="17" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="7" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="17" r="2" fill="currentColor"></svg:circle>`,
})
export class BxBrailleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
