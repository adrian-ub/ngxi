import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCalendarEventIcon],svg[bxs-calendar-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-1 15h-6v-6h6zm1-10H5V7h14z"></svg:path>`,
})
export class BxsCalendarEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
