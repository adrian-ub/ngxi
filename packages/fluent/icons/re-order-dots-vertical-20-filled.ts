import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsVertical20FilledIcon],svg[fluent-re-order-dots-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M8 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M13.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M15 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M13.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentReOrderDotsVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
