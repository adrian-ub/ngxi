import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnOneThirdLeft20FilledIcon],svg[fluent-layout-column-one-third-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8zM7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1z"></svg:path>`,
})
export class FluentLayoutColumnOneThirdLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
