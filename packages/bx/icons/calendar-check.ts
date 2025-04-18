import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCalendarCheckIcon],svg[bx-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m.002 16H5V8h14z"></svg:path><svg:path fill="currentColor" d="m11 17.414l5.707-5.707l-1.414-1.414L11 14.586l-2.293-2.293l-1.414 1.414z"></svg:path>`,
})
export class BxCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
