import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineGreaterThanEqualIcon],svg[ic-outline-greater-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z"></svg:path><svg:path fill="currentColor" d="M18 20.998H6v-2h12z"></svg:path>`,
})
export class IcOutlineGreaterThanEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
