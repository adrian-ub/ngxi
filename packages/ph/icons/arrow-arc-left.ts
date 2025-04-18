import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftIcon],svg[ph-arrow-arc-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 184a8 8 0 0 1-16 0a88 88 0 0 0-150.22-62.22L43.4 144H88a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v44.77l22.48-22.33A104 104 0 0 1 232 184"></svg:path>`,
})
export class PhArrowArcLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
