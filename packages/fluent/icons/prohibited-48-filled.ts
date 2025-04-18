import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited48FilledIcon],svg[fluent-prohibited-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.914 10.965c-6.68-5.605-16.653-5.267-22.935 1.014c-6.281 6.282-6.62 16.256-1.014 22.935zm2.121 2.121l-23.949 23.95c6.68 5.605 16.653 5.266 22.935-1.015c6.281-6.282 6.62-16.256 1.014-22.935M9.858 9.858c7.81-7.81 20.474-7.81 28.284 0s7.81 20.474 0 28.284s-20.474 7.81-28.284 0s-7.81-20.474 0-28.284"></svg:path>`,
})
export class FluentProhibited48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
