import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNewIndicatorIcon],svg[ix-new-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333c94.256 0 170.666 76.41 170.666 170.667c0 94.256-76.41 170.666-170.666 170.666c-94.257 0-170.667-76.41-170.667-170.666c0-94.257 76.41-170.667 170.667-170.667M256 128c-70.693 0-128 57.307-128 128c0 70.692 57.307 128 128 128c70.692 0 128-57.308 128-128s-57.308-128-128-128m21.333 42.666v64h64v42.667h-64v64h-42.667v-64h-64v-42.667h64v-64z"></svg:path>`,
})
export class IxNewIndicatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
