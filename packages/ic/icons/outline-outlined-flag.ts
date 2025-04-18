import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineOutlinedFlagIcon],svg[ic-outline-outlined-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 6l-1-2H5v17h2v-7h5l1 2h7V6zm4 8h-4l-1-2H7V6h5l1 2h5z"></svg:path>`,
})
export class IcOutlineOutlinedFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
