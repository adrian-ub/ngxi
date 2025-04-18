import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreVertical48RegularIcon],svg[fluent-more-vertical-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.002 15.75a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5m0 11.5a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5m-3.25 8.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0"></svg:path>`,
})
export class FluentMoreVertical48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
