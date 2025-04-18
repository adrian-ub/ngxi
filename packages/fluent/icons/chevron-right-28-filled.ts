import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronRight28FilledIcon],svg[fluent-chevron-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.543 4.293a1 1 0 0 1 1.414 0l8.75 8.75a1 1 0 0 1 0 1.414l-8.75 8.75a1 1 0 0 1-1.414-1.414l8.043-8.043l-8.043-8.043a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class FluentChevronRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
