import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagonThree12FilledIcon],svg[fluent-hexagon-three-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.715 1.998A1 1 0 0 1 3.58 1.5h1.164a1 1 0 0 1 .865.498l.58 1a1 1 0 0 1 0 1.004l-.58 1a1 1 0 0 1-.865.498H3.58a1 1 0 0 1-.865-.498l-.58-1a1 1 0 0 1 0-1.004zm4.33 2.5A1 1 0 0 1 7.91 4h1.164a1 1 0 0 1 .865.498l.58 1a1 1 0 0 1 0 1.004l-.58 1A1 1 0 0 1 9.074 8H7.91a1 1 0 0 1-.865-.498l-.58-1a1 1 0 0 1 0-1.004zM3.58 6.5a1 1 0 0 0-.865.498l-.58 1a1 1 0 0 0 0 1.004l.58 1a1 1 0 0 0 .865.498h1.164a1 1 0 0 0 .865-.498l.58-1a1 1 0 0 0 0-1.004l-.58-1a1 1 0 0 0-.865-.498z"></svg:path>`,
})
export class FluentHexagonThree12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
