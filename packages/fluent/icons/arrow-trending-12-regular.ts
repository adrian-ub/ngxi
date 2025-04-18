import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrending12RegularIcon],svg[fluent-arrow-trending-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.962 2.309A.5.5 0 0 0 10.5 2h-4a.5.5 0 0 0 0 1h2.793L6 6.293L4.854 5.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L4.5 6.207l1.146 1.147a.5.5 0 0 0 .708 0L10 3.707V6.5a.5.5 0 0 0 1 0V2.497a.5.5 0 0 0-.038-.188"></svg:path>`,
})
export class FluentArrowTrending12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
