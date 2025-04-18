import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSquareIcon],svg[ic-twotone-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h14v14H5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm16 16H5V5h14z"></svg:path>`,
})
export class IcTwotoneSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
