import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending28RegularIcon],svg[fluent-data-trending-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3a.75.75 0 0 1 .75.75v17.5a2.25 2.25 0 0 0 2.25 2.25h17.5a.75.75 0 0 1 0 1.5H6.75A3.75 3.75 0 0 1 3 21.25V3.75A.75.75 0 0 1 3.75 3m18.19 4.5l-5.69 5.69l-2.47-2.47a.75.75 0 0 0-1.06 0l-5.5 5.5a.75.75 0 1 0 1.06 1.06l4.97-4.97l2.47 2.47a.75.75 0 0 0 1.06 0L23 8.56v3.69a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class FluentDataTrending28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
