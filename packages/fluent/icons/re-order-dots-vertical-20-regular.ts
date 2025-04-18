import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsVertical20RegularIcon],svg[fluent-re-order-dots-vertical-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5-11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentReOrderDotsVertical20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
