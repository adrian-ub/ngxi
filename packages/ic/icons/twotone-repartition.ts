import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneRepartitionIcon],svg[ic-twotone-repartition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 17H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3 21h18v-6H3zm12.67-4H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5zm1-7l1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2L2 6z"></svg:path>`,
})
export class IcTwotoneRepartitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
