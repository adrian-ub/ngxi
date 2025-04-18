import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDarkTheme20RegularIcon],svg[fluent-dark-theme-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a7 7 0 1 1 0 14zm0-1a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path>`,
})
export class FluentDarkTheme20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
