import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited28RegularIcon],svg[fluent-prohibited-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2m7.936 5.124L7.124 21.936A10.46 10.46 0 0 0 14 24.5c5.799 0 10.5-4.701 10.5-10.5c0-2.63-.967-5.034-2.564-6.876M14 3.5C8.201 3.5 3.5 8.201 3.5 14c0 2.63.967 5.034 2.564 6.876L20.876 6.064A10.46 10.46 0 0 0 14 3.5"></svg:path>`,
})
export class FluentProhibited28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
