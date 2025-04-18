import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCalendarWeekIcon],svg[ix-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H64v384h384zm-42.667 85.333v-42.666H106.667v42.666zm0 42.667H106.667v213.333h298.666zm-192 42.667H384v42.666H213.333zm0 85.333H128v42.667h85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarWeekIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
