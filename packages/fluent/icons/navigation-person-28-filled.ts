import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigationPerson28FilledIcon],svg[fluent-navigation-person-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.003 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-22a1 1 0 0 1-1-1M2 22a1 1 0 0 1 1-1h16.046a3.05 3.05 0 0 0-2.862 2H3a1 1 0 0 1-1-1m20.5-8a4 4 0 0 1 2.636.99A1 1 0 0 0 25 13H3a1 1 0 1 0 0 2h16.854c.705-.622 1.632-1 2.646-1m3 4a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.5 6.25c0 1.868-1.571 3.75-5.5 3.75S17 26.125 17 24.25v-.205c0-1.13.916-2.045 2.046-2.045h6.909c1.13 0 2.045.915 2.045 2.045z"></svg:path>`,
})
export class FluentNavigationPerson28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
