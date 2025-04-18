import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreCircle24RegularIcon],svg[fluent-more-circle-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 12a8.5 8.5 0 1 0-17 0a8.5 8.5 0 0 0 17 0m1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M7 13.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m5 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m5 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class FluentMoreCircle24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
