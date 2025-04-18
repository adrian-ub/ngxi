import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkCircleWarning16FilledIcon],svg[fluent-checkmark-circle-warning-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7a7 7 0 1 1 13.882 1.287l-.59-1.18c-.738-1.476-2.843-1.476-3.58 0l-3.425 6.857A7 7 0 0 1 0 7m9.854-1.146a.5.5 0 0 0-.708-.708L6.25 8.043L4.854 6.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0zm.749 1.7l-3.496 6.998A1 1 0 0 0 8.002 16h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0V9.495a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class FluentCheckmarkCircleWarning16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
