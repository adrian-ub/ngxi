import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDialpad32RegularIcon],svg[fluent-dialpad-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7-21a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentDialpad32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
