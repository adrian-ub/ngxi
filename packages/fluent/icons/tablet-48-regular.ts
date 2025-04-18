import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTablet48RegularIcon],svg[fluent-tablet-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 31a1.25 1.25 0 1 0 0 2.5h8a1.25 1.25 0 1 0 0-2.5zM8.25 8A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40h31.5A4.25 4.25 0 0 0 44 35.75v-23.5A4.25 4.25 0 0 0 39.75 8zM6.5 12.25c0-.966.784-1.75 1.75-1.75h31.5c.967 0 1.75.784 1.75 1.75v23.5a1.75 1.75 0 0 1-1.75 1.75H8.25a1.75 1.75 0 0 1-1.75-1.75z"></svg:path>`,
})
export class FluentTablet48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
