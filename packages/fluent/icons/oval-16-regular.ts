import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOval16RegularIcon],svg[fluent-oval-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5m5-4a4 4 0 1 0 0 8h4a4 4 0 0 0 0-8z"></svg:path>`,
})
export class FluentOval16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
