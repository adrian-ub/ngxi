import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnFourFocusLeft20FilledIcon],svg[fluent-layout-column-four-focus-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2 3a2 2 0 0 0-2-2h-.5v12h.5a2 2 0 0 0 2-2zm-3.5 10V4H10v12zm-6 0H9V4H6.5z"></svg:path>`,
})
export class FluentLayoutColumnFourFocusLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
