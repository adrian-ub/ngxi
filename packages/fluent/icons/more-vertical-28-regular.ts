import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreVertical28RegularIcon],svg[fluent-more-vertical-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m0 8a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5M11.75 22a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0"></svg:path>`,
})
export class FluentMoreVertical28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
