import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectanglePortrait48RegularIcon],svg[fluent-rectangle-portrait-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 44A6.25 6.25 0 0 1 8 37.75v-27.5A6.25 6.25 0 0 1 14.25 4h19.5A6.25 6.25 0 0 1 40 10.25v27.5A6.25 6.25 0 0 1 33.75 44zm-3.75-6.25a3.75 3.75 0 0 0 3.75 3.75h19.5a3.75 3.75 0 0 0 3.75-3.75v-27.5a3.75 3.75 0 0 0-3.75-3.75h-19.5a3.75 3.75 0 0 0-3.75 3.75z"></svg:path>`,
})
export class FluentRectanglePortrait48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
