import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficEventsFilledIcon],svg[tdesign-traffic-events-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.762 8.5L12 1.914L9.238 8.5zm.838 2H8.4l-1.565 3.73h10.33zm2.404 5.73H5.996L4.835 19H3v2h18v-2h-1.835z"></svg:path>`,
})
export class TdesignTrafficEventsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
