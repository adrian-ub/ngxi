import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNewWindowRtlIcon],svg[ooui-new-window-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12H1v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2h-5v2h5v14H3z"></svg:path><svg:path fill="currentColor" d="m1 9l3.3-3.3l5.7 5.7l1.4-1.4l-5.7-5.7L9 1H1z"></svg:path>`,
})
export class OouiNewWindowRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
