import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmark48RegularIcon],svg[fluent-checkmark-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.139 12.871a1.25 1.25 0 0 1-.01 1.768l-22.25 22a1.25 1.25 0 0 1-1.75.007l-9.25-9a1.25 1.25 0 1 1 1.743-1.792L16.993 34l21.378-21.138a1.25 1.25 0 0 1 1.768.01"></svg:path>`,
})
export class FluentCheckmark48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
