import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineUpcomingIcon],svg[ic-baseline-upcoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.16 7.26l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55M11 3h2v5h-2zm-4.6 7.81L7.81 9.4L4.26 5.84L2.84 7.26c.11.03 3.56 3.55 3.56 3.55M20 12h-5c0 1.66-1.34 3-3 3s-3-1.34-3-3H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcBaselineUpcomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
