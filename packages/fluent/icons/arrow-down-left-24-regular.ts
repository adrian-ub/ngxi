import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownLeft24RegularIcon],svg[fluent-arrow-down-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.246 21.005a.75.75 0 1 0 0-1.5H5.577l15.2-15.2a.765.765 0 0 0-1.082-1.081l-15.199 15.2v-7.67a.75.75 0 0 0-1.5 0v9.5c0 .415.336.75.75.75z"></svg:path>`,
})
export class FluentArrowDownLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
