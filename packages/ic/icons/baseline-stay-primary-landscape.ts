import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineStayPrimaryLandscapeIcon],svg[ic-baseline-stay-primary-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z"></svg:path>`,
})
export class IcBaselineStayPrimaryLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
