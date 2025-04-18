import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending32RegularIcon],svg[fluent-data-trending-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 1 1 1v20.5A2.5 2.5 0 0 0 7.5 27H28a1 1 0 1 1 0 2H7.5A4.5 4.5 0 0 1 3 24.5V4a1 1 0 0 1 1-1m15 5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-4.586l-7.293 7.293a1 1 0 0 1-1.414 0L14 14.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L18 15.586L24.586 9H20a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentDataTrending32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
