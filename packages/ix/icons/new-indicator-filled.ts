import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNewIndicatorFilledIcon],svg[ix-new-indicator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333c94.256 0 170.666 76.41 170.666 170.667c0 94.256-76.41 170.666-170.666 170.666c-94.257 0-170.667-76.41-170.667-170.666c0-94.257 76.41-170.667 170.667-170.667m21.333 85.333h-42.667v64h-64v42.667h64v64h42.667v-64h64v-42.667h-64z"></svg:path>`,
})
export class IxNewIndicatorFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
