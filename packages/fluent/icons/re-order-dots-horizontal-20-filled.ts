import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsHorizontal20FilledIcon],svg[fluent-re-order-dots-horizontal-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M5.5 8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m8.5 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M10.5 15a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M4 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path>`,
})
export class FluentReOrderDotsHorizontal20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
