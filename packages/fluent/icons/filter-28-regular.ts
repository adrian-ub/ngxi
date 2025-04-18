import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilter28RegularIcon],svg[fluent-filter-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 19a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5zm4-6a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5zm3-6a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentFilter28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
