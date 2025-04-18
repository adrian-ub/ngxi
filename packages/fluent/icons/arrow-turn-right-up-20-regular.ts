import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRightUp20RegularIcon],svg[fluent-arrow-turn-right-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.854 8.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L12 5.707V12a2 2 0 0 1-2 2H3.5a.5.5 0 0 0 0 1H10a3 3 0 0 0 3-3V5.707l3.146 3.147a.5.5 0 0 0 .708 0"></svg:path>`,
})
export class FluentArrowTurnRightUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
