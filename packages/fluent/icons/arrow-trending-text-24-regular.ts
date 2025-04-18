import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrendingText24RegularIcon],svg[fluent-arrow-trending-text-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 3a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5.56l-5.97 5.97a.75.75 0 0 1-1.06 0l-2.22-2.22l-5.97 5.97a.75.75 0 0 1-1.06-1.06l6.5-6.5a.75.75 0 0 1 1.06 0L13 9.94l5.44-5.44h-3.19a.75.75 0 0 1 0-1.5zM14 13a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentArrowTrendingText24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
