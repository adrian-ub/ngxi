import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLocalPharmacyIcon],svg[ic-twotone-local-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.11 19h13.78l-1.79-5.37l-.21-.63l.21-.63L18.89 7H5.11l1.79 5.37l.21.63l-.21.63zM8 12h3V9h2v3h3v2h-3v3h-2v-3H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3 21h18v-2l-2-6l2-6V5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6l-2 6zm3.9-8.63L5.11 7h13.78l-1.79 5.37l-.21.63l.21.63L18.89 19H5.11l1.79-5.37l.21-.63zM11 17h2v-3h3v-2h-3V9h-2v3H8v2h3z"></svg:path>`,
})
export class IcTwotoneLocalPharmacyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
