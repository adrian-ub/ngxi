import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineDataThresholdingIcon],svg[ic-outline-data-thresholding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16h-1.73L19 17.27zm0-3h-.85l-3 3h-1.62l3-3h-2.12l-3 3H9.8l3-3h-2.12l-3 3H5.84l3-3H6.72L5 17.72V5h14z"></svg:path><svg:path fill="currentColor" d="m10.67 11l2 2l5.08-5.09l-1.41-1.41l-3.67 3.67l-2-2l-4.42 4.42L7.66 14z"></svg:path>`,
})
export class IcOutlineDataThresholdingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
