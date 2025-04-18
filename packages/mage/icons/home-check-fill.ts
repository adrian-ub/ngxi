import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHomeCheckFillIcon],svg[mage-home-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.179 7.76a3.06 3.06 0 0 0-1.16-1.28l-6.47-4a3 3 0 0 0-3.16 0l-6.47 4a3 3 0 0 0-1.36 3l1.67 10a3 3 0 0 0 2.93 2.49h9.61a3.24 3.24 0 0 0 2-.7a2.94 2.94 0 0 0 1-1.79l1.68-10a3 3 0 0 0-.27-1.72m-4.65 3.68l-4.34 4.33a1.81 1.81 0 0 1-2 .4a1.8 1.8 0 0 1-.59-.4l-2.15-2.15a1.001 1.001 0 1 1 1.41-1.41l2 2l4.21-4.21a1.004 1.004 0 0 1 1.42 1.42z"></svg:path>`,
})
export class MageHomeCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
