import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineForwardIcon],svg[ic-baseline-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V4l8 8l-8 8v-4H4V8z"></svg:path>`,
})
export class IcBaselineForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
