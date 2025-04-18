import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnLeftDown20RegularIcon],svg[fluent-arrow-turn-left-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.146 11.146a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L8 14.293V8a2 2 0 0 1 2-2h6.5a.5.5 0 0 0 0-1H10a3 3 0 0 0-3 3v6.293l-3.146-3.147a.5.5 0 0 0-.708 0"></svg:path>`,
})
export class FluentArrowTurnLeftDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
