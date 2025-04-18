import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch28RegularIcon],svg[fluent-search-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.666 18.727A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 1 1 9.5-9.5a9.46 9.46 0 0 1-2.273 6.166l6.053 6.054a.75.75 0 1 1-1.06 1.06zM19.5 11.5a8 8 0 1 0-16 0a8 8 0 0 0 16 0"></svg:path>`,
})
export class FluentSearch28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
