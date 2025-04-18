import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHorizontalDownRightMainIcon],svg[lets-icons-horizontal-down-right-main-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 8l-.707-.707L.586 8l.707.707L2 8Zm10 1a1 1 0 1 0 0-2v2ZM5.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM2 9h10V7H2v2Zm20 7l.707-.707l.707.707l-.707.707L22 16ZM3 17a1 1 0 1 1 0-2v2Zm15.707-5.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM22 17H3v-2h19v2Z"></svg:path>`,
})
export class LetsIconsHorizontalDownRightMainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
