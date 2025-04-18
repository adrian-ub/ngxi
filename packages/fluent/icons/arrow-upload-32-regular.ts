import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpload32RegularIcon],svg[fluent-arrow-upload-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm9.707 4.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414L15 9.414V29a1 1 0 1 0 2 0V9.414l5.293 5.293a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class FluentArrowUpload32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
