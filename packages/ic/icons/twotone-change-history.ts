import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneChangeHistoryIcon],svg[ic-twotone-change-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.77L5.61 18h12.78z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 4L2 20h20zm0 3.77L18.39 18H5.61z"></svg:path>`,
})
export class IcTwotoneChangeHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
