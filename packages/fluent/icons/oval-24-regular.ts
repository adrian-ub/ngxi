import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOval24RegularIcon],svg[fluent-oval-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a8 8 0 0 1 8-8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-8-8m8-6.5a6.5 6.5 0 0 0 0 13h4a6.5 6.5 0 1 0 0-13z"></svg:path>`,
})
export class FluentOval24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
