import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCalendarEditIcon],svg[bx-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M5 20V7h14V6l.002 14z"></svg:path><svg:path fill="currentColor" d="m15.628 12.183l-1.8-1.799l1.37-1.371l1.8 1.799zm-7.623 4.018V18h1.799l4.976-4.97l-1.799-1.799z"></svg:path>`,
})
export class BxCalendarEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
