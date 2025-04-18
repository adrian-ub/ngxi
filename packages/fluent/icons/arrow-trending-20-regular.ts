import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrending20RegularIcon],svg[fluent-arrow-trending-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.962 5.309A.5.5 0 0 0 17.5 5h-6a.5.5 0 0 0 0 1h4.793L10.5 11.793L8.354 9.646a.5.5 0 0 0-.708 0l-5.5 5.5a.5.5 0 0 0 .708.708L8 10.707l2.146 2.147a.5.5 0 0 0 .708 0L17 6.707V11.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.038-.191"></svg:path>`,
})
export class FluentArrowTrending20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
