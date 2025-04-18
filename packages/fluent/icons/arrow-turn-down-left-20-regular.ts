import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnDownLeft20RegularIcon],svg[fluent-arrow-turn-down-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.854 16.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L5.707 12H12a2 2 0 0 0 2-2V3.5a.5.5 0 0 1 1 0V10a3 3 0 0 1-3 3H5.707l3.147 3.146a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class FluentArrowTurnDownLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
