import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowParagraph20FilledIcon],svg[fluent-arrow-paragraph-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 2a.75.75 0 0 1 .75.75v2.5A2.75 2.75 0 0 1 15.25 8h-3.805l1.36 1.495a.75.75 0 0 1-1.11 1.01l-2.5-2.75a.75.75 0 0 1 0-1.01l2.5-2.75a.75.75 0 0 1 1.11 1.01L11.445 6.5h3.805c.69 0 1.25-.56 1.25-1.25v-2.5a.75.75 0 0 1 .75-.75M8.305 9.496a.75.75 0 1 0-1.11 1.008L8.555 12H2.75a.75.75 0 0 0 0 1.5h5.805l-1.36 1.495a.75.75 0 0 0 1.11 1.01l2.5-2.75a.75.75 0 0 0 0-1.01z"></svg:path>`,
})
export class FluentArrowParagraph20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
