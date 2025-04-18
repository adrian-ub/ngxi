import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboard16FilledIcon],svg[fluent-keyboard-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3A1.75 1.75 0 0 0 1 4.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 15 11.25v-6.5A1.75 1.75 0 0 0 13.25 3zM3 10.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.25 7a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M10 6.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6.25 7a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M13 6.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M5.25 9a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M9 8.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class FluentKeyboard16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
