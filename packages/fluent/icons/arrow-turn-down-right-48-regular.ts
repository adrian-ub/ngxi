import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnDownRight48RegularIcon],svg[fluent-arrow-turn-down-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 7.25a1.25 1.25 0 1 0-2.5 0v18.5A7.25 7.25 0 0 0 17.25 33h18.168l-7.04 6.854a1.25 1.25 0 0 0 1.744 1.792l9.5-9.25a1.25 1.25 0 0 0 0-1.792l-9.5-9.25a1.25 1.25 0 0 0-1.744 1.792l7.553 7.354H17.25a4.75 4.75 0 0 1-4.75-4.75z"></svg:path>`,
})
export class FluentArrowTurnDownRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
