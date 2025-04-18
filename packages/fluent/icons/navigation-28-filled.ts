import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigation28FilledIcon],svg[fluent-navigation-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.003 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-22a1 1 0 0 1-1-1M2 22a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1-9a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentNavigation28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
