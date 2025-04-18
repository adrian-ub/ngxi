import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualCircle24RegularIcon],svg[fluent-equal-circle-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.258 10.5a.75.75 0 0 0 0-1.5H7.77a.75.75 0 0 0 0 1.5zm0 4.5a.75.75 0 0 0 0-1.5H7.77a.75.75 0 0 0 0 1.5zM22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17"></svg:path>`,
})
export class FluentEqualCircle24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
