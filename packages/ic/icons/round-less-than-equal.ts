import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLessThanEqualIcon],svg[ic-round-less-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.75 15l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5L7.248 9.168a1 1 0 0 0 0 1.664L15.75 16.5a.901.901 0 1 0 1-1.5"></svg:path><svg:path fill="currentColor" d="M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class IcRoundLessThanEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
