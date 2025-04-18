import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCalendarOutlineIcon],svg[lsicon-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 2v3m5-3v3m-8 1.5h11M5 8.5v1m3-1v1m3-1v1m0 1v1m-3-1v1m-3-1v1m-2.5-8h11v10h-11z"></svg:path>`,
})
export class LsiconCalendarOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
