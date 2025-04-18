import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMobileOptimized32RegularIcon],svg[fluent-mobile-optimized-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1M11 7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h10v14H11zm2.5 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM7 29a1 1 0 1 1-2 0v-2H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1zm20 0a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-2z"></svg:path>`,
})
export class FluentMobileOptimized32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
