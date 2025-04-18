import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlignBottomIcon],svg[ri-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v2H3zm5-6h3l-4 4l-4-4h3V3h2zm10 0h3l-4 4l-4-4h3V3h2z"></svg:path>`,
})
export class RiAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
