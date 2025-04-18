import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnDownRight20FilledIcon],svg[fluent-arrow-turn-down-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.72 16.78a.75.75 0 0 0 1.06 0l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H7A1.5 1.5 0 0 1 5.5 10V3.75a.75.75 0 0 0-1.5 0V10a3 3 0 0 0 3 3h6.44l-2.72 2.72a.75.75 0 0 0 0 1.06"></svg:path>`,
})
export class FluentArrowTurnDownRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
