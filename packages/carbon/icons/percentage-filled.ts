import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPercentageFilledIcon],svg[carbon-percentage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5M4 26.586L26.585 4L28 5.415L5.414 28zM23 28a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonPercentageFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
