import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineUpcomingIcon],svg[ic-outline-upcoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.6 10.81L16.19 9.4l3.56-3.55l1.41 1.41c-.11.03-3.56 3.55-3.56 3.55M13 3h-2v5h2zm-6.6 7.81L7.81 9.4L4.26 5.84L2.84 7.26c.11.03 3.56 3.55 3.56 3.55M20 14h-3.42c-.77 1.76-2.54 3-4.58 3s-3.81-1.24-4.58-3H4v5h16zm0-2c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h5c0 1.66 1.34 3 3 3s3-1.34 3-3z"></svg:path>`,
})
export class IcOutlineUpcomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
