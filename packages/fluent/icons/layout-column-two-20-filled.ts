import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwo20FilledIcon],svg[fluent-layout-column-two-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-3.5zm-1-14H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.5z"></svg:path>`,
})
export class FluentLayoutColumnTwo20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
