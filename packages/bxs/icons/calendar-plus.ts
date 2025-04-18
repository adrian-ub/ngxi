import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCalendarPlusIcon],svg[bxs-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m11-6h-3v3h-2v-3H8v-2h3v-3h2v3h3zM5 7h14v2H5z"></svg:path>`,
})
export class BxsCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
