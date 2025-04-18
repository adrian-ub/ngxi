import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRecordStop16FilledIcon],svg[fluent-record-stop-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m5-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentRecordStop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
