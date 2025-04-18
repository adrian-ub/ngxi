import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight24RegularIcon],svg[fluent-arrow-down-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 21.005a.75.75 0 1 1 0-1.5h7.67l-15.2-15.2a.765.765 0 1 1 1.081-1.081l15.2 15.2v-7.67a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class FluentArrowDownRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
