import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleLeft28RegularIcon],svg[fluent-toggle-left-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17a3 3 0 1 0 0-6a3 3 0 0 0 0 6M8 8a6 6 0 0 0 0 12h12a6 6 0 0 0 0-12zm-4.5 6A4.5 4.5 0 0 1 8 9.5h12a4.5 4.5 0 1 1 0 9H8A4.5 4.5 0 0 1 3.5 14"></svg:path>`,
})
export class FluentToggleLeft28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
