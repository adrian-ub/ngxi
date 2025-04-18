import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDeblurIcon],svg[ic-round-deblur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v18a9 9 0 0 0 0-18"></svg:path><svg:circle cx="6" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="10" r=".5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="14" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="21" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="3" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="18" r="1" fill="currentColor"></svg:circle>`,
})
export class IcRoundDeblurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
