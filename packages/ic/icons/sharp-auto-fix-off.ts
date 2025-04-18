import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoFixOffIcon],svg[ic-sharp-auto-fix-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42l1.41 1.41l-1.46 1.46l1.42 1.42l2.87-2.88l-4.24-4.24l-2.88 2.87l1.42 1.42zM1.39 4.22l7.07 7.07l-6.87 6.88l4.24 4.24l6.88-6.87l7.07 7.07l1.41-1.42L2.81 2.81z"></svg:path>`,
})
export class IcSharpAutoFixOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
