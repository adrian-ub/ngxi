import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnDownLeft48RegularIcon],svg[fluent-arrow-turn-down-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.5 7.25a1.25 1.25 0 1 1 2.5 0v18.5A7.25 7.25 0 0 1 30.75 33H12.582l7.04 6.854a1.25 1.25 0 0 1-1.744 1.792l-9.5-9.25a1.25 1.25 0 0 1 0-1.792l9.5-9.25a1.25 1.25 0 0 1 1.744 1.792L12.069 30.5H30.75a4.75 4.75 0 0 0 4.75-4.75z"></svg:path>`,
})
export class FluentArrowTurnDownLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
