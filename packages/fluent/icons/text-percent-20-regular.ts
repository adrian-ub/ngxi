import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPercent20RegularIcon],svg[fluent-text-percent-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.662 3.085a.5.5 0 0 1 .135.695L6.03 16.778a.5.5 0 1 1-.829-.56L13.968 3.22a.5.5 0 0 1 .694-.135M6 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4M3 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m9 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class FluentTextPercent20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
