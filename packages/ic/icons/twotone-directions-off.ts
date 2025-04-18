import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDirectionsOffIcon],svg[ic-twotone-directions-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 11.29l-9-9a.996.996 0 0 0-1.41 0L8.21 5.38l1.41 1.41L12 4.42L19.58 12l-2.38 2.38l1.41 1.41l3.09-3.09c.4-.37.4-1 .01-1.41"></svg:path><svg:path fill="currentColor" d="M13 7.5v2.67l2.17 2.17L16.5 11zM1.39 4.22l3.99 3.99l-3.09 3.09a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09l3.99 3.99l1.41-1.41L2.81 2.81zm6.64 6.63c-.01.05-.04.1-.04.15v4h2v-2.18l4.38 4.38L12 19.58L4.42 12L6.8 9.62z"></svg:path>`,
})
export class IcTwotoneDirectionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
