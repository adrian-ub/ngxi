import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalFillIcon],svg[ph-traffic-signal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 144h-16V80h16a8 8 0 0 0 0-16h-16V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24H40a8 8 0 0 0 0 16h16v64H40a8 8 0 0 0 0 16h16v56a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-56h16a8 8 0 0 0 0-16m-88-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0 24a28 28 0 1 1-28 28a28 28 0 0 1 28-28"></svg:path>`,
})
export class PhTrafficSignalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
