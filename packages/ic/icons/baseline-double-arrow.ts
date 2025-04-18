import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDoubleArrowIcon],svg[ic-baseline-double-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"></svg:path><svg:path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"></svg:path>`,
})
export class IcBaselineDoubleArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
