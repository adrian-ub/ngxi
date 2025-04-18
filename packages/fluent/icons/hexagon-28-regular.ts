import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon28RegularIcon],svg[fluent-hexagon-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.39 4.5c-.441 0-.85.233-1.075.613l-4.886 8.25a1.25 1.25 0 0 0 0 1.274l4.886 8.25c.225.38.634.613 1.075.613h9.22c.442 0 .85-.233 1.076-.613l4.887-8.25a1.25 1.25 0 0 0 0-1.274l-4.887-8.25A1.25 1.25 0 0 0 18.61 4.5zm-2.366-.151A2.75 2.75 0 0 1 9.39 3h9.22a2.75 2.75 0 0 1 2.366 1.348l4.887 8.25a2.75 2.75 0 0 1 0 2.804l-4.887 8.25A2.75 2.75 0 0 1 18.61 25H9.39a2.75 2.75 0 0 1-2.366-1.349l-4.885-8.25a2.75 2.75 0 0 1 0-2.802z"></svg:path>`,
})
export class FluentHexagon28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
