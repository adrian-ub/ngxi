import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLessThanOrEqualIcon],svg[tdesign-less-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.297 3.565L7.735 8.5l12.562 4.935l-.731 1.861L2.266 8.5l17.3-6.796zM3 19h18v2H3z"></svg:path>`,
})
export class TdesignLessThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
