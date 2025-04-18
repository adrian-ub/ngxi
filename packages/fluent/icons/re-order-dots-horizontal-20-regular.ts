import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsHorizontal20RegularIcon],svg[fluent-re-order-dots-horizontal-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0M9 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0M4 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m11 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-7-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentReOrderDotsHorizontal20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
