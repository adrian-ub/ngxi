import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCalendarPlusIcon],svg[bx-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h3v3h2v-3h3v-2h-3v-3h-2v3H8z"></svg:path><svg:path fill="currentColor" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m.002 16H5V8h14z"></svg:path>`,
})
export class BxCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
