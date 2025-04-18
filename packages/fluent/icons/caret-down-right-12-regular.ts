import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretDownRight12RegularIcon],svg[fluent-caret-down-right-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.298 3.256c.63-.63 1.707-.184 1.707.707v3.543a1.5 1.5 0 0 1-1.5 1.5H3.962c-.89 0-1.337-1.077-.707-1.707zm.707.707L3.962 8.006h3.543a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class FluentCaretDownRight12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
