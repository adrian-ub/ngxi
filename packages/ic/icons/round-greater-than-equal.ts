import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundGreaterThanEqualIcon],svg[ic-round-greater-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.25 15l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 16.5a.901.901 0 1 1-1-1.5"></svg:path><svg:path fill="currentColor" d="M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class IcRoundGreaterThanEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
