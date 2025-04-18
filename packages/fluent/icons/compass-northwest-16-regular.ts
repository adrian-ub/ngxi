import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompassNorthwest16RegularIcon],svg[fluent-compass-northwest-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.13 6.478c-.448-.866.482-1.796 1.349-1.348l1.908.99a3.5 3.5 0 0 1 1.495 1.49l1 1.922c.451.867-.482 1.8-1.349 1.349l-1.921-1a3.5 3.5 0 0 1-1.493-1.495zm2.797.53l-1.908-.99l.988 1.909a2.5 2.5 0 0 0 1.066 1.068l1.922 1l-1-1.922a2.5 2.5 0 0 0-1.068-1.066"></svg:path>`,
})
export class FluentCompassNorthwest16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
