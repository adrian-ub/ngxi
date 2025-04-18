import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineAutoFixHighIcon],svg[ic-baseline-auto-fix-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5.6L10 7L8.6 4.5L10 2L7.5 3.4L5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96a.996.996 0 0 0 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05a.996.996 0 0 0 0-1.41zm-1.03 5.49l-2.12-2.12l2.44-2.44l2.12 2.12z"></svg:path>`,
})
export class IcBaselineAutoFixHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
