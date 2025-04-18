import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAlarmOnIcon],svg[ic-round-alarm-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.94 10.11l-4.4 4.42l-1.6-1.6a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06L10 16.11c.29.29.77.29 1.06 0L16 11.17c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0m6.24-5.1L18.1 2.45c-.42-.35-1.05-.3-1.41.13c-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13a1 1 0 0 0-.12-1.41M4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41a.99.99 0 0 0-1.4-.13L2.82 5.01a1 1 0 0 0-.12 1.41c.35.43.98.48 1.4.13M12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcRoundAlarmOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
