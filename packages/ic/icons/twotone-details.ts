import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDetailsIcon],svg[ic-twotone-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8.92L18.6 19H13zm-2 0V19H5.4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 3L2 21h20zm1 5.92L18.6 19H13zm-2 0V19H5.4z"></svg:path>`,
})
export class IcTwotoneDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
