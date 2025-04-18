import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretDownRight20FilledIcon],svg[fluent-caret-down-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5.957c0-.89-1.077-1.337-1.707-.707L5.25 13.293c-.63.63-.184 1.707.707 1.707H13.5a1.5 1.5 0 0 0 1.5-1.5z"></svg:path>`,
})
export class FluentCaretDownRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
