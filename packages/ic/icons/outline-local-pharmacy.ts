import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineLocalPharmacyIcon],svg[ic-outline-local-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6l-2 6v2h18v-2l-2-6l2-6zm-3.9 8.63L18.89 19H5.11l1.79-5.37l.21-.63l-.21-.63L5.11 7h13.78l-1.79 5.37l-.21.63zM13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class IcOutlineLocalPharmacyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
