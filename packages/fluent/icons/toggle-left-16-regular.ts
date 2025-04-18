import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleLeft16RegularIcon],svg[fluent-toggle-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m10-2a4 4 0 0 0-4-4H5a4 4 0 1 0 0 8h6a4 4 0 0 0 4-4m-4-3a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6z"></svg:path>`,
})
export class FluentToggleLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
