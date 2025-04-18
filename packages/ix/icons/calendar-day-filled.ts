import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCalendarDayFilledIcon],svg[ix-calendar-day-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 170.667V448H64V170.667zM448 128V64H64v64zM149.333 234.667H192v42.666h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarDayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
