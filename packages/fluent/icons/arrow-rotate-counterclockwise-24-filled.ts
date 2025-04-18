import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRotateCounterclockwise24FilledIcon],svg[fluent-arrow-rotate-counterclockwise-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9a9 9 0 0 0 4.873 8.001L6 20a1 1 0 0 0-.117 1.993L6 22h4a1 1 0 0 0 .993-.883L11 21v-4a1 1 0 0 0-1.993-.117L9 17l-.001 1.327A7.01 7.01 0 0 1 5 12a7 7 0 0 1 14 0a1 1 0 1 0 2 0a9 9 0 0 0-9-9m0 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class FluentArrowRotateCounterclockwise24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
