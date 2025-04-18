import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkLock16FilledIcon],svg[fluent-checkmark-lock-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7a7 7 0 0 1 13.974-.614A3 3 0 0 0 9.5 9v.063A2 2 0 0 0 7.999 11v2.93Q7.51 14 7 14a7 7 0 0 1-7-7m9.854-1.146a.5.5 0 0 0-.708-.708L6.25 8.043L4.854 6.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0zM10.5 9v1H10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V9a2 2 0 1 0-4 0m1 1V9a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentCheckmarkLock16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
