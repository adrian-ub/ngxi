import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTimerIcon],svg[carbon-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11h2v9h-2zm-2-9h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m28 9l-1.42-1.41l-2.25 2.25a10.94 10.94 0 1 0 1.18 1.65ZM16 26a9 9 0 1 1 9-9a9 9 0 0 1-9 9"></svg:path>`,
})
export class CarbonTimerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
