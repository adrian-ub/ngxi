import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowFit24RegularIcon],svg[fluent-arrow-fit-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.762 7.452a.75.75 0 0 1 .036 1.06L4.476 11h5.774a.75.75 0 0 1 0 1.5H4.476l2.322 2.488a.75.75 0 1 1-1.096 1.024l-3.5-3.75a.75.75 0 0 1 0-1.024l3.5-3.75a.75.75 0 0 1 1.06-.036m10.476 0a.75.75 0 0 0-.036 1.06L19.524 11H13.75a.75.75 0 0 0 0 1.5h5.774l-2.322 2.488a.75.75 0 1 0 1.096 1.024l3.5-3.75a.75.75 0 0 0 0-1.024l-3.5-3.75a.75.75 0 0 0-1.06-.036"></svg:path>`,
})
export class FluentArrowFit24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
