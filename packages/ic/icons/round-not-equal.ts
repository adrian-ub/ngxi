import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundNotEqualIcon],svg[ic-round-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9.998H6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2m0 6H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M14.999 5c.507.219.742.806.525 1.314l-5.212 12.162A1 1 0 0 1 9 19a1 1 0 0 1-.525-1.314l5.212-12.162A1 1 0 0 1 15 5z"></svg:path>`,
})
export class IcRoundNotEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
