import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownLeft32RegularIcon],svg[fluent-arrow-down-left-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.004 28.996a1 1 0 1 0 0-2H6.418L28.707 4.707a1 1 0 0 0-1.414-1.414L5.003 25.582V14.996a1 1 0 1 0-2 0v13a1 1 0 0 0 1 1z"></svg:path>`,
})
export class FluentArrowDownLeft32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
