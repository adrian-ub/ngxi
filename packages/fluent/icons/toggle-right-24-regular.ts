import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleRight24RegularIcon],svg[fluent-toggle-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M2 12a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5m5-3.5a3.5 3.5 0 1 0 0 7h10a3.5 3.5 0 1 0 0-7z"></svg:path>`,
})
export class FluentToggleRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
