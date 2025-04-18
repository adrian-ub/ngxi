import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPackageIcon],svg[ix-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 42.664l192 106.667v213.333L256 469.331L64 362.664V149.331zm149.333 147.733l-128 73.899v143.915l128-73.638zm-298.666 1.195v143.007l128 73.612v-142.72zm69.12-55.531l-40.043 23.04l119.232 68.843l39.979-23.083zM256 89.945l-37.461 21.54l119.082 68.736l37.59-21.696z"></svg:path>`,
})
export class IxPackageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
