import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCalendarHeartIcon],svg[bx-calendar-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.648 14.711L11.997 18l3.35-3.289a2.13 2.13 0 0 0 0-3.069a2.225 2.225 0 0 0-3.126 0l-.224.219l-.224-.219a2.224 2.224 0 0 0-3.125 0a2.13 2.13 0 0 0 0 3.069"></svg:path><svg:path fill="currentColor" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m.002 16H5V8h14z"></svg:path>`,
})
export class BxCalendarHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
