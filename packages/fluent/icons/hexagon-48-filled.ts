import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon48FilledIcon],svg[fluent-hexagon-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.427 6a3.25 3.25 0 0 0-2.84 1.67L4.38 22.42a3.25 3.25 0 0 0 0 3.16l8.207 14.75a3.25 3.25 0 0 0 2.84 1.67h17.148a3.25 3.25 0 0 0 2.84-1.67l8.208-14.75a3.25 3.25 0 0 0 0-3.16L35.415 7.67A3.25 3.25 0 0 0 32.575 6z"></svg:path>`,
})
export class FluentHexagon48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
