import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleRight28RegularIcon],svg[fluent-toggle-right-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m1-9a6 6 0 0 1 0 12H8A6 6 0 0 1 8 8zm4.5 6A4.5 4.5 0 0 0 20 9.5H8a4.5 4.5 0 1 0 0 9h12a4.5 4.5 0 0 0 4.5-4.5"></svg:path>`,
})
export class FluentToggleRight28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
