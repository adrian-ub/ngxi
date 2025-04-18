import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer12FilledIcon],svg[fluent-timer-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1 6.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m4 1a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm5.854-3.647a.5.5 0 0 1-.707.001l-1.002-.998a.5.5 0 1 1 .706-.708l1.002.998a.5.5 0 0 1 .001.707"></svg:path>`,
})
export class FluentTimer12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
