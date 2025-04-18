import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOval28RegularIcon],svg[fluent-oval-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14a9 9 0 0 1 9-9h6a9 9 0 1 1 0 18h-6a9 9 0 0 1-9-9m9-7.5a7.5 7.5 0 1 0 0 15h6a7.5 7.5 0 0 0 0-15z"></svg:path>`,
})
export class FluentOval28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
