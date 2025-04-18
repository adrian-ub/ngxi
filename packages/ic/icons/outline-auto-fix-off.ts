import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineAutoFixOffIcon],svg[ic-outline-auto-fix-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42l1.41 1.41l-1.46 1.46l1.41 1.41l2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.98.98 0 0 0-.7-.29c-.26 0-.51.1-.71.29l-2.17 2.17l1.41 1.41zM1.39 4.22l7.07 7.07l-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l6.17-6.17l7.07 7.07l1.41-1.41L2.81 2.81zm9.9 9.9l-5.46 5.46l-1.41-1.41l5.46-5.46z"></svg:path>`,
})
export class IcOutlineAutoFixOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
