import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkMultiple32RegularIcon],svg[fluent-bookmark-multiple-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.308 4a3.6 3.6 0 0 1 3.225-2H19.5A7.5 7.5 0 0 1 27 9.5v13.433a3.6 3.6 0 0 1-2 3.226V9.5A5.5 5.5 0 0 0 19.5 4zM8.75 6A3.75 3.75 0 0 0 5 9.75V29a1 1 0 0 0 1.591.806l6.945-5.092l7.92 5.126A1 1 0 0 0 23 29V9.75A3.75 3.75 0 0 0 19.25 6zM7 9.75C7 8.783 7.784 8 8.75 8h10.5c.966 0 1.75.783 1.75 1.75v17.412l-6.957-4.502a1 1 0 0 0-1.134.034L7 27.027z"></svg:path>`,
})
export class FluentBookmarkMultiple32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
