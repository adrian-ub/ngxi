import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDust28RegularIcon],svg[fluent-dust-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3a6.5 6.5 0 0 0-6.258 4.736a6.5 6.5 0 1 0 0 12.527A6.5 6.5 0 1 0 21.19 14A6.5 6.5 0 0 0 16.5 3m-4.955 5.829a5.001 5.001 0 1 1 8.068 4.584a.75.75 0 0 0 0 1.174a5 5 0 1 1-8.068 4.585a.75.75 0 0 0-1.044-.588a5 5 0 1 1 0-9.168a.75.75 0 0 0 1.044-.587M9 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m16 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2M8 25a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentDust28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
