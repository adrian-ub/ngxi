import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselinePlayDisabledIcon],svg[ic-baseline-play-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.19V5l11 7l-2.55 1.63zm12 14.54l-5.11-5.11L8 7.73L4.27 4L3 5.27l5 5V19l5.33-3.4l5.4 5.4z"></svg:path>`,
})
export class IcBaselinePlayDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
