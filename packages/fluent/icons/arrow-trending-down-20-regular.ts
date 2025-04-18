import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrendingDown20RegularIcon],svg[fluent-arrow-trending-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.962 14.691A.5.5 0 0 1 17.5 15h-6a.5.5 0 0 1 0-1h4.793L10.5 8.207l-2.146 2.147a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 1 1 .708-.708L8 9.293l2.146-2.147a.5.5 0 0 1 .708 0L17 13.293V8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.038.191"></svg:path>`,
})
export class FluentArrowTrendingDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
