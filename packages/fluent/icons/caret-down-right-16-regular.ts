import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretDownRight16RegularIcon],svg[fluent-caret-down-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.293 4.25c.63-.63 1.707-.184 1.707.707V10.5a1.5 1.5 0 0 1-1.5 1.5H4.957c-.89 0-1.337-1.077-.707-1.707zm.707.707L4.957 11H10.5a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class FluentCaretDownRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
