import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineHideImageIcon],svg[ic-baseline-hide-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5c0-1.1-.9-2-2-2H5.83L21 18.17zM2.81 2.81L1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61l1.41-1.41zM6 17l3-4l2.25 3l.82-1.1l2.1 2.1z"></svg:path>`,
})
export class IcBaselineHideImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
