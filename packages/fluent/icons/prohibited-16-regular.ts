import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited16RegularIcon],svg[fluent-prohibited-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.875 3.418a6 6 0 0 0-8.457 8.457zm.707.707l-8.457 8.457a6 6 0 0 0 8.457-8.457M3.05 3.05a7 7 0 1 1 9.9 9.9a7 7 0 0 1-9.9-9.9"></svg:path>`,
})
export class FluentProhibited16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
