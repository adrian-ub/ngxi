import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardTab20FilledIcon],svg[fluent-keyboard-tab-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm-8.47-.53a.75.75 0 0 0-1.06 1.06l3.97 3.97H2.75a.75.75 0 0 0 0 1.5h8.69l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentKeyboardTab20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
