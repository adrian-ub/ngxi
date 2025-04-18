import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamClockFIcon],svg[jam-clock-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9V4a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamClockFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
