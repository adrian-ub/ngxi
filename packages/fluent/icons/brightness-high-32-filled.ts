import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessHigh32FilledIcon],svg[fluent-brightness-high-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0zm6 13a7 7 0 1 1-14 0a7 7 0 0 1 14 0m-2 0a5 5 0 0 0-5-5v10a5 5 0 0 0 5-5m9 0a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1M17 27a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0zM6 16a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1m.707-10.706a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414zM5.293 26.708a1 1 0 0 0 1.414 0l2-2a1 1 0 1 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414m20-21.414a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414zm0 21.414l-2-2a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-1.414 1.414"></svg:path>`,
})
export class FluentBrightnessHigh32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
