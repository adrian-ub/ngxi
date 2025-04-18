import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRhombus24RegularIcon],svg[fluent-rhombus-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.807 5.408A2.25 2.25 0 0 1 7.894 4h12.858a2.25 2.25 0 0 1 2.087 3.092l-4.642 11.5A2.25 2.25 0 0 1 16.111 20H3.252a2.25 2.25 0 0 1-2.086-3.092zm2.087.092a.75.75 0 0 0-.696.47l-4.641 11.5a.75.75 0 0 0 .695 1.03h12.859a.75.75 0 0 0 .695-.47l4.642-11.5a.75.75 0 0 0-.696-1.03z"></svg:path>`,
})
export class FluentRhombus24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
