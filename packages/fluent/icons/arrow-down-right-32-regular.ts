import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight32RegularIcon],svg[fluent-arrow-down-right-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 28.996a1 1 0 1 1 0-2h10.585L3.297 4.707A1 1 0 0 1 4.71 3.293L27 25.582V14.996a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1z"></svg:path>`,
})
export class FluentArrowDownRight32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
