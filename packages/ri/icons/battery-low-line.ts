import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBatteryLowLineIcon],svg[ri-battery-low-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v10h14V7zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 3h4v8H5zm16 1h2v6h-2z"></svg:path>`,
})
export class RiBatteryLowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
