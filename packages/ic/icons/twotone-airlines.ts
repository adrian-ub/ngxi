import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlinesIcon],svg[ic-twotone-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.05 6L5.8 18h11.54l2.25-12zm.45 8a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17.34 18H5.8l8.25-12h5.54zM13 4L2 20h17l3-16zm1.5 5a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class IcTwotoneAirlinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
