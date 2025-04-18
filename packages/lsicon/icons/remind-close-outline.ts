import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRemindCloseOutlineIcon],svg[lsicon-remind-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 12.5h-9m0 0V7a4.48 4.48 0 0 1 1.146-3M3.5 12.5H2m6-10A4.5 4.5 0 0 1 12.5 7v3.5M8 2.5V1m0 1.5V3m0-.5a4.48 4.48 0 0 0-2.806.982M9.6 12.9a1.6 1.6 0 1 1-3.2 0M2 2l12 12"></svg:path>`,
})
export class LsiconRemindCloseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
