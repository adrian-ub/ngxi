import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrendingDown20FilledIcon],svg[fluent-arrow-trending-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.943 14.537a.8.8 0 0 1-.161.242l-.002.001l-.001.002a.75.75 0 0 1-.529.218h-5.5a.75.75 0 0 1 0-1.5h3.69L10.5 8.56l-1.97 1.97a.75.75 0 0 1-1.06 0L2.22 5.28a.75.75 0 0 1 1.06-1.06L8 8.94l1.97-1.97a.75.75 0 0 1 1.06 0l5.47 5.47V8.75a.75.75 0 0 1 1.5 0v5.5q0 .154-.057.287"></svg:path>`,
})
export class FluentArrowTrendingDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
