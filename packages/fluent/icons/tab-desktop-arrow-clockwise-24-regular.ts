import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopArrowClockwise24RegularIcon],svg[fluent-tab-desktop-arrow-clockwise-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3A2.75 2.75 0 0 0 3 5.75v5.351a7 7 0 0 1 1.5-1.165V5.75c0-.69.56-1.25 1.25-1.25H11v1.25A2.25 2.25 0 0 0 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.187A7 7 0 0 1 12.9 21h5.351A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zM19.5 6.5h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25zm-7.25 3.25a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-.75.75H9.5a.75.75 0 0 1 0-1.5h1.33l-.018-.013A4.5 4.5 0 1 0 12.5 16a.75.75 0 0 1 1.5 0a6 6 0 1 1-2.5-4.874V10.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentTabDesktopArrowClockwise24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
