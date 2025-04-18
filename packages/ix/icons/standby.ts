import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStandbyIcon],svg[ix-standby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 119.073c62.546 25.317 106.666 86.636 106.666 158.26C426.666 371.59 350.256 448 256 448c-94.257 0-170.667-76.41-170.667-170.667c0-71.624 44.12-132.943 106.666-158.26v47.385c-38.259 22.132-64 63.497-64 110.875c0 70.693 57.308 128 128 128s128-57.307 128-128c0-47.378-25.74-88.743-63.999-110.875zM277.333 64v213.333h-42.667V64z"></svg:path>`,
})
export class IxStandbyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
