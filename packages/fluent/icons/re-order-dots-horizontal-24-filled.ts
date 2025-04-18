import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsHorizontal24FilledIcon],svg[fluent-re-order-dots-horizontal-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentReOrderDotsHorizontal24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
