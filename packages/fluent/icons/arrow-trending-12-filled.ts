import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrending12FilledIcon],svg[fluent-arrow-trending-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 1.5a.75.75 0 0 0 0 1.5h2.323L5.97 5.91l-.94-.94a.75.75 0 0 0-1.06 0L1.22 7.72a.75.75 0 0 0 1.06 1.06L4.5 6.56l.97.97a.75.75 0 0 0 1.089-.03L9.5 4.213V6.25a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentArrowTrending12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
