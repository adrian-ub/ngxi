import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalBoldIcon],svg[ph-align-center-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136h-68v-16h44a20 20 0 0 0 20-20V60a20 20 0 0 0-20-20h-44v-8a12 12 0 0 0-24 0v8H72a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h44v16H48a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h68v8a12 12 0 0 0 24 0v-8h68a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20M76 64h104v32H76Zm128 128H52v-32h152Z"></svg:path>`,
})
export class PhAlignCenterHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
