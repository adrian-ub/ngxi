import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate90Rtl24FilledIcon],svg[fluent-text-direction-rotate-90-rtl-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.385 15.327l-9-3.75a1 1 0 1 0-.77 1.846l2.385.993v3.667l-2.385.994a1 1 0 0 0 .77 1.846l9-3.75a1 1 0 0 0 0-1.846M15 15.25l2.4 1l-2.4 1zM8 20a1 1 0 1 1-2 0V6.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L8 6.414zm8-9a1 1 0 0 1-1-1V6.414l-.293.293a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L17 6.414V10a1 1 0 0 1-1 1"></svg:path>`,
})
export class FluentTextDirectionRotate90Rtl24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
