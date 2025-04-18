import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleMultiple16RegularIcon],svg[fluent-toggle-multiple-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 4a3 3 0 0 1 3-3h6a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4zm6 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-9-1a3 3 0 0 1 3-3h6a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4z"></svg:path>`,
})
export class FluentToggleMultiple16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
