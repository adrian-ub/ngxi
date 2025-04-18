import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon28FilledIcon],svg[fluent-hexagon-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.39 3a2.75 2.75 0 0 0-2.366 1.349l-4.885 8.25a2.75 2.75 0 0 0 0 2.802l4.885 8.25A2.75 2.75 0 0 0 9.39 25h9.22a2.75 2.75 0 0 0 2.366-1.348l4.887-8.25a2.75 2.75 0 0 0 0-2.804l-4.887-8.25A2.75 2.75 0 0 0 18.61 3zm-7.25 9.599l.645.382z"></svg:path>`,
})
export class FluentHexagon28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
