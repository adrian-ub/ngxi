import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce28RegularIcon],svg[fluent-arrow-bounce-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.75A.75.75 0 0 1 2.75 7h8.5a.75.75 0 0 1 0 1.5H4.615l10.387 9.963l9.731-9.256a.75.75 0 1 1 1.034 1.086l-10.25 9.75a.75.75 0 0 1-1.036-.002L3.5 9.51v6.741a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentArrowBounce28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
