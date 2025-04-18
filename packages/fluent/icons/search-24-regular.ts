import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch24RegularIcon],svg[fluent-search-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.102 16.162a8 8 0 1 1 1.06-1.06l4.618 4.618a.75.75 0 1 1-1.06 1.06zM16.5 10a6.5 6.5 0 1 0-13 0a6.5 6.5 0 0 0 13 0"></svg:path>`,
})
export class FluentSearch24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
