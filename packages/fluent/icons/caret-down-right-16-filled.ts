import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretDownRight16FilledIcon],svg[fluent-caret-down-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.957c0-.89-1.077-1.337-1.707-.707L4.25 10.293c-.63.63-.184 1.707.707 1.707H10.5a1.5 1.5 0 0 0 1.5-1.5z"></svg:path>`,
})
export class FluentCaretDownRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
