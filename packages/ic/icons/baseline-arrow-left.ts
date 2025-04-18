import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineArrowLeftIcon],svg[ic-baseline-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 7l-5 5l5 5z"></svg:path>`,
})
export class IcBaselineArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
