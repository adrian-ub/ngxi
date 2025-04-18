import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChart3dFilledIcon],svg[tdesign-chart-3d-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.665 5.847L12 .845L3.338 5.847L12 10.846zM13 3.93v4h-2v-4zm8.66 3.652L13 12.578v10l8.66-5zm-5.634 5.587l3.464 2l-1 1.732l-3.464-2zM11 22.577v-10L2.34 7.58v9.997zM8.975 14.9l-3.464 2l-1-1.732l3.464-2z"></svg:path>`,
})
export class TdesignChart3dFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
