import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDisableBellNotificationSolidIcon],svg[streamline-disable-bell-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.297 1.358A.75.75 0 0 1 1.358.298l1.721 1.72a4.94 4.94 0 0 1 8.86 3.004V9.43c0 .309.122.605.34.823c.249.248.443.341.716.341a.5.5 0 1 1 0 1h-.34l1.048 1.047a.75.75 0 0 1-1.061 1.061zm1.766 3.529l6.709 6.708H1.005a.5.5 0 0 1 0-1c.273 0 .467-.093.715-.34c.219-.22.341-.515.341-.824V5.02l.002-.134Zm3.188 8.295a.75.75 0 0 1 .75-.75h1.998a.75.75 0 0 1 0 1.5H6.001a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDisableBellNotificationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
