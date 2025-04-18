import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRightCircle24FilledIcon],svg[fluent-arrow-down-right-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm3.25 6a.75.75 0 0 0-.75.75v4.639L9.278 8.217a.75.75 0 0 0-1.056 1.066L13.49 14.5H8.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentArrowDownRightCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
