import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsHorizontal16FilledIcon],svg[fluent-re-order-dots-horizontal-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M3.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 12a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-6-1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path>`,
})
export class FluentReOrderDotsHorizontal16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
