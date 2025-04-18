import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsHorizontal16RegularIcon],svg[fluent-re-order-dots-horizontal-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M3 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentReOrderDotsHorizontal16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
