import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignRightSimpleIcon],svg[ph-align-right-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m-32 40v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 0H32v64h152Z"></svg:path>`,
})
export class PhAlignRightSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
