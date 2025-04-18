import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagonThree16FilledIcon],svg[fluent-hexagon-three-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.473 1.998a1 1 0 0 1 .865-.498h2.324a1 1 0 0 1 .865.498l1.16 2a1 1 0 0 1 0 1.004l-1.16 2a1 1 0 0 1-.865.498H4.338a1 1 0 0 1-.865-.498l-1.16-2a1 1 0 0 1 0-1.004zM4.338 8.5a1 1 0 0 0-.865.498l-1.16 2a1 1 0 0 0 0 1.004l1.16 2a1 1 0 0 0 .865.498h2.324a1 1 0 0 0 .865-.498l1.16-2a1 1 0 0 0 0-1.004l-1.16-2a1 1 0 0 0-.865-.498zm5.135-3.002A1 1 0 0 1 10.338 5h2.324a1 1 0 0 1 .865.498l1.16 2a1 1 0 0 1 0 1.004l-1.16 2a1 1 0 0 1-.865.498h-2.324a1 1 0 0 1-.865-.498l-1.16-2a1 1 0 0 1 0-1.004z"></svg:path>`,
})
export class FluentHexagonThree16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
