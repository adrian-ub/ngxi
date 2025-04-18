import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpLeft24RegularIcon],svg[fluent-arrow-up-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.246 3a.75.75 0 0 1 0 1.5H5.577l15.2 15.2a.765.765 0 0 1-1.082 1.081L4.496 5.581v7.669a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 .75-.75z"></svg:path>`,
})
export class FluentArrowUpLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
