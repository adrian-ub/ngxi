import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise20FilledIcon],svg[fluent-arrow-counterclockwise-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10a6 6 0 0 0-9.969-4.5H7.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.16a7.5 7.5 0 1 1-2.495 5.313a.75.75 0 1 1 1.5.054A6 6 0 1 0 16 10"></svg:path>`,
})
export class FluentArrowCounterclockwise20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
