import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited12RegularIcon],svg[fluent-prohibited-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1M2 6a4 4 0 0 1 6.453-3.16L2.84 8.453A4 4 0 0 1 2 6m1.547 3.16L9.16 3.547A4 4 0 0 1 3.547 9.16"></svg:path>`,
})
export class FluentProhibited12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
