import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonYAxisIcon],svg[carbon-y-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 26V7.828l2.586 2.586L12 9L7 4L2 9l1.414 1.414L6 7.828V26a2 2 0 0 0 2 2h20v-2Z"></svg:path>`,
})
export class CarbonYAxisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
