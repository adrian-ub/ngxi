import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreHorizontal32RegularIcon],svg[fluent-more-horizontal-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 16a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m9 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m6.5 2.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class FluentMoreHorizontal32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
