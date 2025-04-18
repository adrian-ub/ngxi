import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePercentageIcon],svg[ic-twotone-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.501 3.5l-15 15.001l1.996 1.996l15-15z"></svg:path><svg:circle cx="7" cy="7" r="1" fill="currentColor" fill-rule="evenodd" opacity=".3"></svg:circle><svg:circle cx="17" cy="17" r="1" fill="currentColor" fill-rule="evenodd" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M17.003 14a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M17 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7.003 4a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M7 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class IcTwotonePercentageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
