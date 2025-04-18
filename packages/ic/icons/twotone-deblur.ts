import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDeblurIcon],svg[ic-twotone-deblur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="10" r=".5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="14" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="21" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="3" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9"></svg:path><svg:path fill="currentColor" d="M12 5v14c3.86 0 7-3.14 7-7s-3.14-7-7-7" opacity=".3"></svg:path>`,
})
export class IcTwotoneDeblurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
