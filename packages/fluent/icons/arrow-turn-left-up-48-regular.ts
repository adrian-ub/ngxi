import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnLeftUp48RegularIcon],svg[fluent-arrow-turn-left-up-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.75 35.5a1.25 1.25 0 1 1 0 2.5h-18.5A7.25 7.25 0 0 1 15 30.75V12.582l-6.854 7.04a1.25 1.25 0 0 1-1.792-1.744l9.25-9.5a1.25 1.25 0 0 1 1.792 0l9.25 9.5a1.25 1.25 0 0 1-1.792 1.744L17.5 12.069V30.75a4.75 4.75 0 0 0 4.75 4.75z"></svg:path>`,
})
export class FluentArrowTurnLeftUp48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
