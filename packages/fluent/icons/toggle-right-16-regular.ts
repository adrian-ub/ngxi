import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleRight16RegularIcon],svg[fluent-toggle-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8H5a4 4 0 0 1-4-4m4-3a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6z"></svg:path>`,
})
export class FluentToggleRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
