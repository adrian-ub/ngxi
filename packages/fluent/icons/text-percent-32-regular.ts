import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPercent32RegularIcon],svg[fluent-text-percent-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.653 3.171a1 1 0 0 1 .27 1.388l-16.188 24a1 1 0 1 1-1.658-1.118l16.188-24a1 1 0 0 1 1.388-.27M9 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8M3 9a6 6 0 1 1 12 0A6 6 0 0 1 3 9m16 14a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class FluentTextPercent32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
