import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnOneThirdRightHint20RegularIcon],svg[fluent-layout-column-one-third-right-hint-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A2.5 2.5 0 0 0 3 5.5a.5.5 0 0 0 1 0A1.5 1.5 0 0 1 5.5 4a.5.5 0 0 0 0-1m3 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM4 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zm0 6a.5.5 0 0 0-1 0A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5M8.5 16a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4-13a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.5 13V4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"></svg:path>`,
})
export class FluentLayoutColumnOneThirdRightHint20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
