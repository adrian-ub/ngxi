import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreHorizontal28RegularIcon],svg[fluent-more-horizontal-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 14a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m8 0a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0M22 16.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class FluentMoreHorizontal28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
