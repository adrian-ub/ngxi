import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximize32RegularIcon],svg[fluent-arrow-maximize-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 3a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V6.414L6.414 27H14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V18a1 1 0 1 1 2 0v7.586L25.586 5H18a1 1 0 1 1 0-2z"></svg:path>`,
})
export class FluentArrowMaximize32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
