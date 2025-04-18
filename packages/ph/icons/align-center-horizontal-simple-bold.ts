import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleBoldIcon],svg[ph-align-center-horizontal-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76h-68V48a12 12 0 0 0-24 0v28H48a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h68v28a12 12 0 0 0 24 0v-28h68a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20m-4 80H52v-56h152Z"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
