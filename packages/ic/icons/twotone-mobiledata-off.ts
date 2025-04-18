import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneMobiledataOffIcon],svg[ic-twotone-mobiledata-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7h3l-4-4l-4 4h3v4.17l2 2zM2.81 2.81L1.39 4.22L8 10.83v6.18l-3 .01L9 21l4-4l-3 .01v-4.18l9.78 9.78l1.41-1.42z"></svg:path>`,
})
export class IcTwotoneMobiledataOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
