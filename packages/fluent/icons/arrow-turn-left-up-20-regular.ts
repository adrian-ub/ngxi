import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnLeftUp20RegularIcon],svg[fluent-arrow-turn-left-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.146 8.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 5.707V12a2 2 0 0 0 2 2h6.5a.5.5 0 0 1 0 1H10a3 3 0 0 1-3-3V5.707L3.854 8.854a.5.5 0 0 1-.708 0"></svg:path>`,
})
export class FluentArrowTurnLeftUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
