import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCalendarDayIcon],svg[ix-calendar-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm341.333 42.667v42.666H106.667v-42.666zM106.667 192h298.666v213.333H106.667zM192 234.667h-42.667v42.666H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
