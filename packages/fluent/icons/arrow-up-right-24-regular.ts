import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRight24RegularIcon],svg[fluent-arrow-up-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 3a.75.75 0 0 0 0 1.5h7.67L3.22 19.7a.764.764 0 1 0 1.081 1.081l15.2-15.2v7.669a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentArrowUpRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
