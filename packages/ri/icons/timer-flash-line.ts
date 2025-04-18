import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTimerFlashLineIcon],svg[ri-timer-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.382 5.968A8.96 8.96 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 3 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414zM12 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m1-8h3l-5 6.5V14H8l5-6.505zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
