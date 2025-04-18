import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookInformation24RegularIcon],svg[fluent-book-information-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0M11.5 9.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zM19 18V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1V18z"></svg:path>`,
})
export class FluentBookInformation24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
