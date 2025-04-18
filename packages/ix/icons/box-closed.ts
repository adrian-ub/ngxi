import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBoxClosedIcon],svg[ix-box-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 42.667l192 106.666v213.334L256 469.333L64 362.667V149.333zM405.333 190.4l-128 73.899v143.914l128-73.637zm-298.666 1.195v143.006l128 73.612v-142.72zm69.12-55.531l-40.043 23.04l119.232 68.843l39.979-23.083zM256 89.947l-37.461 21.541l119.082 68.736l37.59-21.696z"></svg:path>`,
})
export class IxBoxClosedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
