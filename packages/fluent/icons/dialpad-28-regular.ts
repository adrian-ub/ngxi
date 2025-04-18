import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDialpad28RegularIcon],svg[fluent-dialpad-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5-12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5-18a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentDialpad28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
