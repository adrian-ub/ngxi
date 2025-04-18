import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAlignHorizontalCenterIcon],svg[ic-round-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c.55 0 1 .45 1 1v4h6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4c0 .55-.45 1-1 1s-1-.45-1-1v-4H7.5c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14H11v-4H4.5C3.67 10 3 9.33 3 8.5S3.67 7 4.5 7H11V3c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
