import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineLessThanEqualIcon],svg[ic-outline-less-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 15.5L9.25 10l8.25-5.5l-1-1.5L6 10l10.5 7z"></svg:path><svg:path fill="currentColor" d="M18 20.998H6v-2h12z"></svg:path>`,
})
export class IcOutlineLessThanEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
