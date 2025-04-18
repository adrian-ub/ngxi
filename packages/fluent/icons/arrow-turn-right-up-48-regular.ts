import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRightUp48RegularIcon],svg[fluent-arrow-turn-right-up-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 35.5a1.25 1.25 0 1 0 0 2.5h18.5A7.25 7.25 0 0 0 33 30.75V12.582l6.854 7.04a1.25 1.25 0 0 0 1.792-1.744l-9.25-9.5a1.25 1.25 0 0 0-1.792 0l-9.25 9.5a1.25 1.25 0 0 0 1.792 1.744l7.354-7.553V30.75a4.75 4.75 0 0 1-4.75 4.75z"></svg:path>`,
})
export class FluentArrowTurnRightUp48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
